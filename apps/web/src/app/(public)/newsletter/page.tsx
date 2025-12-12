"use client";

import { NewsletterForm } from "@/components/forms/news-latter-form";
import { HeroTitle } from "@/components/layout/hero-title";

export default function NewsletterPage() {
	return (
		<main className="flex flex-col items-center justify-center px-4 py-16">
			<HeroTitle
				tag="Assinatura"
				title="Inscreva-se na nossa Newsletter"
				description="Receba novidades, ofertas e conteúdos exclusivos direto no seu e-mail."
			/>
			<NewsletterForm />

			<p className="mt-6 text-center text-sm text-neutral-400">
				Prometemos não enviar spam. Você pode cancelar a inscrição a
				qualquer momento.
			</p>
		</main>
	);
}
