import Link from "next/link";
import { ForgotForm } from "@/components/forms/auth/forgot.form";

export default function ForgotPage() {
	return (
		<div className="h-screen flex items-center justify-center">
			<Link href="/sign-in" className="hover:underline">
				Voltar
			</Link>
			<ForgotForm />
		</div>
	);
}
