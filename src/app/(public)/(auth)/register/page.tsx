import Link from "next/link";
import { RegisterUserForm } from "@/components/forms/auth/register.form";

export default function RegisterPage() {
	return (
		<div className="space-y-4">
			<RegisterUserForm />
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
