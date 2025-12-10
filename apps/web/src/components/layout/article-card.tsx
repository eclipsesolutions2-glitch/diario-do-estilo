import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/core/schemas/article";

interface ArticleCardProps {
	article: Article;
	f?: boolean;
}

export function ArticleCard({ article, f = false }: ArticleCardProps) {
	const imageSrc = article.cover_image ?? "/images/placeholder.svg";
	const authorName = article.author?.name ?? "---";

	return (
		<Link href={`/articles/${article.slug}`}>
			{f ? (
				<div className="group cursor-pointer">
					<div className="relative aspect-3/4 overflow-hidden mb-6 bg-secondary/20">
						<Image
							src={imageSrc}
							alt={article.title}
							fill
							className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
						/>
						<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1">
							<span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
								{article.categories[0]}
							</span>
						</div>
					</div>
					<div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
						<h3 className="font-serif text-2xl line-clamp-2 mb-1 group-hover:text-primary transition-colors">
							{article.title}
						</h3>
						<p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
							{authorName}
						</p>
					</div>
				</div>
			) : (
				<div className="group flex flex-col h-full">
					<div className="relative overflow-hidden aspect-3/4 mb-6">
						<Image
							src={imageSrc}
							alt={article.title}
							fill
							className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div className="absolute top-4 left-4">
							<span className="inline-block px-2 py-1 text-[10px] font-bold tracking-[0.2em] text-foreground uppercase bg-background/90 backdrop-blur-sm">
								{article.categories[0]}
							</span>
						</div>
					</div>

					<div className="flex-1 flex flex-col">
						<h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
							{article.title}
						</h3>
						<p className="font-sans text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
							{article.excerpt}
						</p>
						<div className="mt-auto flex items-center justify-between border-t border-border pt-4">
							<span className="text-xs font-bold uppercase tracking-widest text-foreground/50">
								{authorName}
							</span>
							<span className="text-xs font-serif italic text-primary">
								{article.view_count} Visualizações
							</span>
						</div>
					</div>
				</div>
			)}
		</Link>
	);
}
