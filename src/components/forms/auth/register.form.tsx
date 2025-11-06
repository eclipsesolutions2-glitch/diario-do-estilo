"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
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
import { auth } from "@/core/actions/auth";
import {
	type RegisterUserSchemaValues,
	registerUserSchema,
} from "@/core/schemas/auth/register-user.schema";

export function RegisterUserForm() {
	const router = useRouter();
	const form = useForm<RegisterUserSchemaValues>({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(registerUserSchema),
		defaultValues: {
			name: "",
			username: "",
			email: "",
			password: "",
			passwordConfirmation: "",
			role: "reader",
		},
	});

	const name = useWatch({ control: form.control, name: "name" });

	useEffect(() => {
		if (!name) {
			form.setValue("username", "");
			return;
		}

		const username = name
			.trim()
			.toLowerCase()
			.replace(/\s+/g, ".")
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");

		form.setValue("username", username);
	}, [name, form]);

	const onSubmit = async (formData: RegisterUserSchemaValues) => {
		const result = await auth.register({
			name: formData.name,
			username: formData.username,
			email: formData.email,
			password: formData.password,
			passwordConfirmation: formData.passwordConfirmation,
			role: formData.role,
		});

		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		if (result.data.user.role === "reader") {
			router.replace("/");
		} else {
			router.replace("/dashboard");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					name="name"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center justify-between">
								<FormLabel>Nome completo</FormLabel>
								<div className="text-sm text-muted-foreground">
									Username:{" "}
									<span className="font-medium">
										{form.watch("username") || "---"}
									</span>
								</div>
							</div>
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
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Mínimo de 8 caracteres"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					name="passwordConfirmation"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirmar senha</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Repita sua senha"
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
						<LoaderWidget label="Cadastrando usuário" />
					) : (
						"Criar conta"
					)}
				</Button>
			</form>
		</Form>
	);
}
