import { NewsLatterForm } from "@/components/forms/news-latter-form";

export function FooterNewsletterForm() {
	return (
		<div>
			<p className="font-sans text-sm /> mb-4">
				Inscreva-se para receber a curadoria semanal.
			</p>
			<NewsLatterForm />
		</div>
	);
}
