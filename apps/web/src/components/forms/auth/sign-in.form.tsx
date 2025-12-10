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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type SignInSchemaValues,
	signInSchema,
} from "@/core/schemas/auth/sign-in.schema";

export function SignInForm() {
	return (
		<div className="space-y-8 flex flex-col pt-20">
			<div className="text-center">
				<h1 className="text-3xl font-medium font-serif">
					Bem-vindo de Volta
				</h1>
				<p className="text-sm text-muted-foreground">
					Entre para acessar conteúdo exclusivo
				</p>
			</div>

			<SForm />

			<p className="text-sm text-neutral-500 text-center">
				Ainda não tem uma conta?{" "}
				<Link
					href="/register"
					className="text-primary font-medium hover:underline"
				>
					Cadastre-se
				</Link>
			</p>
		</div>
	);
}

function SForm() {
	const router = useRouter();
	const form = useForm({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (formData: SignInSchemaValues) => {
		const result = await action.api.auth.signIn(formData);
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
							<FormMessage className="text-xs text-destructive" />
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
							<FormMessage className="text-xs text-destructive" />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full h-12 rounded-none text-xs uppercase tracking-wider font-medium"
				>
					Entrar
				</Button>
			</form>
		</Form>
	);
}
