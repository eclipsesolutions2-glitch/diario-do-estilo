"use client";

import { motion } from "framer-motion";

export function BrandTicker() {
	return (
		<section className="py-16 bg-brand-900 text-brand-50 overflow-hidden">
			<div className="relative overflow-hidden">
				<motion.div
					className="flex whitespace-nowrap gap-12"
					animate={{ x: ["0%", "-100%"] }}
					transition={{
						repeat: Infinity,
						duration: 20,
						ease: "linear",
					}}
				>
					{[...Array(2)].map((_, loopIndex) =>
						[...Array(10)].map((_, i) => (
							<span
								key={`${loopIndex}-${i + 1}`}
								className="text-6xl md:text-8xl font-display uppercase tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-default"
							>
								Maravilhas Africanas —
							</span>
						)),
					)}
				</motion.div>
			</div>
		</section>
	);
}
