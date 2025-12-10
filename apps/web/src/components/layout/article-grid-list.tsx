"use client";

import { motion } from "framer-motion";
import type { Article } from "@/core/schemas/article";
import { ArticleCard } from "./article-card";

interface ArticleGridListProps {
	data: Article[];
}

export function ArticleGridList({ data }: ArticleGridListProps) {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
				{data.map((article, idx) => (
					<motion.div
						key={article.id}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: idx * 0.1 }}
					>
						<ArticleCard article={article} />
					</motion.div>
				))}
			</div>
		</section>
	);
}

/* <div className="space-y-12">
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
				{data.length > 0 ? (
					data.map((article, idx) => (
						<motion.div
							key={article.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{
								delay: idx * 0.08,
								duration: 0.6,
								ease: "easeOut",
							}}
							whileHover={{ y: -6 }}
						>
							<ArticleCard article={article} />
						</motion.div>
					))
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="col-span-full text-center py-24"
					>
						<p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
							Nenhum conteúdo disponível
						</p>
						<h3 className="font-serif text-2xl text-foreground">
							Sem artigos em destaque
						</h3>
					</motion.div>
				)}
			</div>
		</div> */
