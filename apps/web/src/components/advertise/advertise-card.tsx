"use client";

import { motion } from "framer-motion";

interface AdvertiseCardProps {
	title: string;
	description: string;
}

export function AdvertiseCard({ title, description }: AdvertiseCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true }}
			className="border p-10 rounded-none hover:bg-muted/30 transition-colors"
		>
			<h3 className="text-2xl font-serif leading-tight mb-4">{title}</h3>

			<p className="text-sm text-muted-foreground leading-relaxed">
				{description}
			</p>
		</motion.div>
	);
}
