import Link from "next/link";

export function FooterEnd() {
	return (
		<div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
			<p className="text-xs tracking-wider">
				&copy; 2025 Diário do Estilo. Todos os direitos reservados.
			</p>
			<div className="flex gap-6 mt-4 md:mt-0">
				<Link
					href="/terms/privacy-policy"
					className="text-xs hover:text-primary"
				>
					Política de Privacidade
				</Link>
				<Link href="/terms" className="text-xs hover:text-primary">
					Termos de Uso
				</Link>
				<Link
					href="/terms/cookies"
					className="text-xs hover:text-primary"
				>
					Cookies
				</Link>
			</div>
		</div>
	);
}
