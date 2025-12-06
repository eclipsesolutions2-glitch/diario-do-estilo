"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Spinner } from "@workspace/ui/components/spinner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type SignInSchemaValues,
	signInSchema,
} from "@/core/schemas/auth/sign-in.schema";

export const SignInForm = () => {
	const router = useRouter();
	const form = useForm<SignInSchemaValues>({
		mode: "all",
		resolver: zodResolver(signInSchema),
		criteriaMode: "firstError",
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (formData: SignInSchemaValues) => {
		const result = await action.api.auth.signIn({
			email: formData.email,
			password: formData.password,
		});

		if (!result.success) {
			toast.error(result.error);
			return;
		}

		form.reset();
		toast.success(result.message);
		router.replace("/");
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="exemplo@email.com"
									autoComplete="email"
									aria-autocomplete="list"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center justify-between">
								<FormLabel>Senha</FormLabel>
								<Link
									href="/forgot"
									className="text-sm text-primary hover:text-brand-700 hover:underline"
									as="/forgot"
								>
									Esqueceu a senha?
								</Link>
							</div>
							<FormControl>
								<Input
									type="password"
									placeholder="Pelo menos 8 caractes"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					disabled={form.formState.isSubmitting}
					className="w-full"
				>
					{form.formState.isSubmitting ? (
						<div className="flex items-center">
							<Spinner className="mr-2 inline-block" />
							<span>Entrando...</span>
						</div>
					) : (
						"Entrar"
					)}
				</Button>
			</form>
		</Form>
	);
};
