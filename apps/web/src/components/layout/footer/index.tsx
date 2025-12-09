import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { LogoBrand } from "../logo-brand";
import { FOOTER_ABOUT_LIST, FOOTER_CATEGORIES_LIST } from "./data";
import { FooterBlockList } from "./footer-block-list";
import { FooterEnd } from "./footer-end";
import { FooterNewsletterForm } from "./footer-newsletter-form";

export function Footer() {
	return (
		<footer className="border-t border-border bg-muted/30 mt-24">
			<div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					{/* Logo + descrição */}
					<div className="order-1">
						<Link href="/">
							<LogoBrand />
						</Link>
						<p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
							Celebrando a elegância, a herança e o futuro da moda
							africana.
						</p>
						<div className="flex items-center gap-4">
							<Link
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-brand-700 transition-colors"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-brand-700 transition-colors"
							>
								<Facebook className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Newsletter - logo após a logo no mobile */}
					<div className="order-2 md:order-4">
						<h4 className="font-semibold text-primary mb-4 uppercase tracking-wider text-sm">
							Newsletter
						</h4>
						<FooterNewsletterForm />
					</div>

					{/* Categorias */}
					<div className="order-3 md:order-2">
						<FooterBlockList
							title="Categorias"
							itens={FOOTER_CATEGORIES_LIST}
						/>
					</div>

					{/* Sobre */}
					<div className="order-4 md:order-3">
						<FooterBlockList
							title="Sobre"
							itens={FOOTER_ABOUT_LIST}
						/>
					</div>
				</div>

				<FooterEnd />
			</div>
		</footer>
	);
}
