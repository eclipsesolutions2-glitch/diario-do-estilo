import { ContactFAQ } from "@/components/contact/contact-faq";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { HeroTitle } from "@/components/layout/hero-title";

export default function ContactPage() {
	return (
		<div className="container m-auto">
			<HeroTitle
				title="Entre em Contato"
				description="Tem uma história para compartilhar? Quer colaborar conosco? Estamos ansiosos para ouvir você."
				tag="Sobre Nós"
			/>

			<div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
				<ContactForm />
				<ContactInfo />
			</div>

			<ContactFAQ />
		</div>
	);
}
