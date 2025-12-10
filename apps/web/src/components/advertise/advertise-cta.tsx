"use client";

import { Button } from "@workspace/ui/components/button";
import { motion } from "framer-motion";

export function AdvertiseCTA() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			viewport={{ once: true }}
			className="mt-32 p-20 text-center bg-primary/5  rounded-none"
		>
			<h3 className="text-5xl font-serif leading-none mb-6">
				Eleve a sua marca ao nível editorial
			</h3>

			<p className="max-w-xl mx-auto mb-12 leading-relaxed text-lg">
				Trabalhe com uma plataforma que trata moda africana como arte,
				identidade e legado.
			</p>

			<Button
				size="lg"
				className="rounded-none px-16 tracking-widest uppercase"
			>
				Falar com o time editorial
			</Button>
		</motion.div>
	);
}
