import Link from "next/link";

export default function RegisterPage() {
	return (
		<div className="space-y-4 pt-20">
			<div className="text-center">
				<h1 className="text-3xl font-medium font-serif">
					Crie sua Conta
				</h1>
				<p className="text-sm text-muted-foreground">
					Junte-se à nossa comunidade de moda
				</p>
			</div>
			<p className="text-sm text-neutral-500 text-center">
				Já tem uma conta?{" "}
				<Link
					href="/sign-in"
					className="text-primary font-medium hover:underline"
				>
					Faça login
				</Link>
			</p>
		</div>
	);
}
