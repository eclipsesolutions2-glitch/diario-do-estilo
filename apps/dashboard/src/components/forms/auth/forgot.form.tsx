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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type SignInSchemaValues,
	signInSchema,
} from "@/core/schemas/auth/sign-in.schema";

export const ForgotForm = () => {
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
									className="h-12 rounded-none"
								/>
							</FormControl>
							<FormMessage className="text-xs text-destructive" />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					disabled={form.formState.isSubmitting}
					className="w-full h-12 rounded-none text-xs uppercase tracking-wider font-medium"
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
