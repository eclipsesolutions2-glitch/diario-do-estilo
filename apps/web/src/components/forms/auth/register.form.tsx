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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type RegisterUserSchemaValues,
	registerUserSchema,
} from "@/core/schemas/auth/register-user.schema";
import { slugifyName } from "@/lib/formats/format-username";

export function RegisterForm() {
	return (
		<div className="space-y-10 flex flex-col pt-20">
			<div className="text-center space-y-2">
				<h1 className="text-3xl font-serif font-medium">
					Crie sua Conta
				</h1>
				<p className="text-sm text-muted-foreground">
					Junte-se à nossa comunidade de moda
				</p>
			</div>

			<RegisterFormFields />

			<p className="text-sm text-neutral-500 text-center">
				Já tem uma conta?{" "}
				<Link
					href="/sign-in"
					className="text-primary font-medium hover:underline"
				>
					Entrar
				</Link>
			</p>
		</div>
	);
}

function RegisterFormFields() {
	const router = useRouter();
	const form = useForm({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(registerUserSchema),
		defaultValues: {
			email: "",
			name: "",
			username: "",
			password: "",
			passwordConfirmation: "",
			role: "reader",
		},
	});

	const name = form.watch("name");
	const username = form.watch("username");

	useEffect(() => {
		const slug = slugifyName(name || "");
		form.setValue("username", slug, { shouldValidate: true });
	}, [name, form]);

	const onSubmit = async (formData: RegisterUserSchemaValues) => {
		const result = await action.api.auth.register(formData);
		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		form.reset();
		router.push("/");
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 w-full max-w-md mx-auto"
			>
				<input type="hidden" {...form.register("username")} />
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="space-y-2">
							<div className="flex items-center justify-between">
								<FormLabel className="text-sm uppercase tracking-wide text-muted-foreground">
									Nome completo
								</FormLabel>
								<span className="text-xs text-muted-foreground">
									@{username || "username"}
								</span>
							</div>
							<FormControl>
								<Input
									{...field}
									placeholder="Seu nome"
									className="h-12 rounded-none"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="space-y-2">
							<FormLabel className="text-sm uppercase tracking-wide text-muted-foreground">
								Email
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="email"
									placeholder="seu@email.com"
									className="h-12 rounded-none"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="space-y-2">
							<FormLabel className="text-sm uppercase tracking-wide text-muted-foreground">
								Senha
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="password"
									placeholder="********"
									className="h-12 rounded-none"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="passwordConfirmation"
					render={({ field }) => (
						<FormItem className="space-y-2">
							<FormLabel className="text-sm uppercase tracking-wide text-muted-foreground">
								Confirmar senha
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="password"
									placeholder="********"
									className="h-12 rounded-none"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full h-12 rounded-none text-xs uppercase tracking-wider font-medium"
				>
					Criar conta
				</Button>
			</form>
		</Form>
	);
}
