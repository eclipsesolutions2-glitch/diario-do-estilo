"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Article } from "@/core/schemas/article";

interface ArticleRendererProps {
	data: Article;
}

export function ArticleRenderer({ data: article }: ArticleRendererProps) {
	return (
		<article>
			<header className="relative pt-20 pb-12 md:pt-32 md:pb-20 container m-auto text-center max-w-4xl mx-auto">
				<div className="mb-8 flex justify-center flex-wrap gap-2">
					{article.categories?.map((cat) => (
						<span
							key={cat}
							className="inline-block px-3 py-1 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/20"
						>
							{cat}
						</span>
					))}
				</div>

				<h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
					{article.title}
				</h1>

				<div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-sans uppercase tracking-wider text-muted-foreground border-t border-b border-border py-6 mx-12">
					{article.author?.name && (
						<span className="text-foreground font-bold">
							Por {article.author.name}
						</span>
					)}

					{article.published_at && (
						<>
							<span className="hidden md:inline text-brand-800">
								•
							</span>
							<time className="text-brand-700">
								{new Date(
									article.published_at,
								).toLocaleDateString("pt-PT")}
							</time>
						</>
					)}

					<span className="hidden md:inline text-brand-800">•</span>
					<span className="text-brand-700">
						{article.view_count} leituras
					</span>
				</div>
			</header>

			{article.cover_image && (
				<div className="w-full max-w-[1600px] mx-auto mb-20 px-4 md:px-8">
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="relative aspect-video md:aspect-21/9 overflow-hidden"
					>
						<Image
							src={article.cover_image}
							alt={article.title}
							fill
							className="object-cover"
							priority
						/>
					</motion.div>
				</div>
			)}

			<div className="container-editorial max-w-3xl mx-auto">
				{article.excerpt && (
					<p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground mb-12 first-letter:text-7xl first-letter:uppercase first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-primary">
						{article.excerpt}
					</p>
				)}

				<div
					className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:font-serif prose-p:text-lg prose-p:leading-loose prose-blockquote:font-display prose-blockquote:text-4xl prose-blockquote:not-italic prose-blockquote:border-l-primary prose-img:rounded-none text-foreground/80 mb-20"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: false
					dangerouslySetInnerHTML={{ __html: article.content }}
				/>
			</div>
		</article>
	);
}
