"use client";

import { motion } from "framer-motion";

export function ContactFAQ() {
	return (
		<section className="mt-28 border-t pt-20">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-4xl font-serif mb-16 text-center tracking-tight"
			>
				Perguntas frequentes
			</motion.h2>

			<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
				{[
					{
						title: "Como submeter um artigo?",
						desc: "Envie sua proposta para redacao@diariodoestilo.com.",
					},
					{
						title: "Aceitam press releases?",
						desc: "Sim, basta enviar para nosso email de contato.",
					},
					{
						title: "Como anunciar?",
						desc: "Fale conosco para oportunidades comerciais.",
					},
					{
						title: "Posso republicar conteúdo?",
						desc: "Solicite autorização antes de republicar.",
					},
				].map((item, i) => (
					<motion.div
						key={item.title}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.08 }}
						viewport={{ once: true }}
						className="border p-8 rounded-none hover:bg-muted/30 transition-colors"
					>
						<h3 className="font-medium mb-3">{item.title}</h3>

						<p className="text-sm text-muted-foreground leading-relaxed">
							{item.desc}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
