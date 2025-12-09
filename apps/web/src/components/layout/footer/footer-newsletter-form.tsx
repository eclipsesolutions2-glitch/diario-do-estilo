import { Button } from "@workspace/ui/components/button";

export function FooterNewsletterForm() {
	return (
		<div>
			<p className="font-sans text-sm /> mb-4">
				Inscreva-se para receber a curadoria semanal.
			</p>
			<div className="flex border-b pb-2">
				<input
					type="email"
					placeholder="Seu email"
					className="bg-transparent border-none outline-none  w-full placeholder:/30 font-serif"
				/>
				<Button
					variant="ghost"
					className="text-primary uppercase text-xs font-bold tracking-widest"
				>
					Enviar
				</Button>
			</div>
		</div>
	);
}
