"use client";

import { motion } from "framer-motion";
import { LogoBrand } from "./logo-brand";

interface HeroTitleProps {
	tag?: string;
	title: string;
	description?: string;
	showLogo?: boolean;
}

export function HeroTitle({
	tag = "Edição",
	title,
	description,
	showLogo = true,
}: HeroTitleProps) {
	return (
		<section className="py-20 md:py-32 container-editorial relative overflow-hidden">
			{showLogo && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
					<LogoBrand />
				</div>
			)}

			<div className="max-w-2xl mx-auto text-center relative z-10">
				{tag && (
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 block"
					>
						{tag}
					</motion.span>
				)}

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="font-display text-5xl md:text-7xl text-foreground mb-8 leading-tight"
				>
					{title}
				</motion.h1>

				{description && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed italic"
					>
						{description}
					</motion.p>
				)}
			</div>
		</section>
	);
}
