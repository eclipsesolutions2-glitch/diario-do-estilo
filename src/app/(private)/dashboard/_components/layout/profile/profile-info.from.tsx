"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefreshCcw, Save } from "lucide-react";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoaderWidget } from "@/components/loader-widget";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profile } from "@/core/actions/profile";
import {
	type ProfileInfoValues,
	profileInfoSchema,
} from "@/core/schemas/profile.schema";
import { normalizeText } from "@/lib/formats/normalize-text";

interface ProfileInfoFormProps {
	defaultValues: ProfileInfoValues;
}

export function ProfileInfoForm({ defaultValues }: ProfileInfoFormProps) {
	const form = useForm<ProfileInfoValues>({
		mode: "all",
		resolver: zodResolver(profileInfoSchema),
		defaultValues,
	});

	const name = form.watch("name");
	const prevName = useRef(defaultValues.name);

	useEffect(() => {
		if (!name) return;

		if (prevName.current === name) return;

		prevName.current = name;

		const username = normalizeText(name).replace(/\s+/g, "").toLowerCase();

		form.setValue("username", username, { shouldValidate: true });
	}, [name, form]);

	const onSubmit = async (data: ProfileInfoValues) => {
		const result = await profile.update(data);

		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		form.reset(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid md:grid-cols-2 gap-4">
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome completo</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="Ex: João da Silva"
										autoComplete="name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name="bio"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bio</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="Fale um pouco sobre você..."
										maxLength={125}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name="username"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome de usuário</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="Ex: joaosilva"
										autoComplete="username"
										disabled
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>E-mail</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="exemplo@dominio.com"
										autoComplete="email"
										disabled
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<p className="text-xs tracking-wide text-muted-foreground font-bold">
					Nota: Email não pode ser alterado
				</p>

				<div className="flex items-center gap-3">
					<Button
						type="submit"
						disabled={
							!form.formState.isDirty ||
							form.formState.isSubmitting
						}
						className="text-white"
					>
						{form.formState.isSubmitting ? (
							<LoaderWidget label="Salvando" />
						) : (
							<>
								<Save className="h-4 w-4" />
								Salvar Alterações
							</>
						)}
					</Button>

					<Button
						type="button"
						variant="outline"
						size="icon"
						title="Restaurar dados originais"
						disabled={!form.formState.isDirty}
						onClick={() => form.reset(defaultValues)}
					>
						<RefreshCcw />
					</Button>
				</div>
			</form>
		</Form>
	);
}
