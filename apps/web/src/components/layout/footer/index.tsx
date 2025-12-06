import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { LogoDiario } from "../logo-diario.js";

export function Footer() {
	return (
		<footer className="border-t border-border bg-muted/30 mt-24">
			<div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					<div className="md:col-span-2">
						<Link href="/">
							<LogoDiario />
						</Link>
						<p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
							Falamos de moda global e crítica social, colocamos
							em evidência a moda africana e a cultura local.
							Arte, cultura geral e conhecimento de moda.
						</p>
						<div className="flex items-center gap-4">
							<Link
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="min-w-10 w-10 min-h-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-brand-700 transition-colors"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="min-w-10 w-10 min-h-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-brand-700 transition-colors"
							>
								<Facebook className="h-5 w-5" />
							</Link>
						</div>
					</div>

					<div>
						<h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
							Categorias
						</h4>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									href="/african-fashion"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Moda Africana
								</Link>
							</li>
							<li>
								<Link
									href="/tendencies"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Tendências
								</Link>
							</li>
							<li>
								<Link
									href="/culture"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Cultura
								</Link>
							</li>
							<li>
								<Link
									href="/categoria/critica-social"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Crítica Social
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
							Sobre
						</h4>
						<ul className="space-y-3 text-sm">
							<li>
								<Link
									href="/about-us"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Quem Somos
								</Link>
							</li>
							<li>
								<Link
									href="/about-us#equipe"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Equipe
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Contato
								</Link>
							</li>
							<li>
								<Link
									href="/advertise"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Anuncie
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
					<p>
						© 2025 Diário Do Estilo. Todos os direitos reservados.
					</p>
					<div className="flex items-center gap-6">
						<Link
							href="/terms/privacy-policy"
							className="hover:text-primary transition-colors"
						>
							Política de Privacidade
						</Link>
						<Link
							href="/terms"
							className="hover:text-primary transition-colors"
						>
							Termos de Uso
						</Link>
						<Link
							href="/terms/cookies"
							className="hover:text-primary transition-colors"
						>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
