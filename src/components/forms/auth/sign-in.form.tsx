"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { auth } from "@/core/actions/auth";
import {
	type SignInSchemaValues,
	signInSchema,
} from "@/core/schemas/auth/sign-in.schema";

export function SignInForm() {
	const router = useRouter();
	const form = useForm<SignInSchemaValues>({
		mode: "all",
		criteriaMode: "all",
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (formData: SignInSchemaValues) => {
		const result = await auth.signIn({
			email: formData.email,
			password: formData.password,
		});

		if (!result.success) {
			toast.error(result.error);
			return;
		}

		form.reset();
		toast.success(result.message);
		const redirectRoute =
			result.data.user.role === "admin" ? "/dashboard" : "/";
		router.replace(redirectRoute);
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
									className="text-sm text-primary hover:text-primary/80 hover:underline"
								>
									Esqueceu a senha?
								</Link>
							</div>
							<FormControl>
								<Input
									type="password"
									placeholder="Pelo menos 8 caracteres"
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
					size="lg"
					className="w-full bg-primary hover:bg-[#0A5F62]"
				>
					{form.formState.isSubmitting ? (
						<LoaderWidget label="Entrando" />
					) : (
						"Entrar"
					)}
				</Button>
			</form>
		</Form>
	);
}
