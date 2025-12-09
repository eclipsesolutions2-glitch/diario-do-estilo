import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/core/schemas/article";

interface ArticleCardProps {
	article: Article;
	featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
	const imageSrc = article.cover_image ?? "/images/placeholder.svg";
	const authorName = article.author?.name ?? "---";

	return (
		<Link href={`/articles/${article.slug}`} className="group block h-full">
			<article
				className={`relative flex flex-col h-full overflow-hidden ${
					featured ? "items-end p-8 md:p-12 min-h-[200px]" : ""
				}`}
			>
				<div
					className={`relative w-full ${featured ? "h-full" : "aspect-3/4 mb-6"}`}
				>
					<Image
						src={imageSrc}
						alt={article.title}
						fill
						className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-${
							featured ? "105" : "110"
						}`}
					/>
					{featured && (
						<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
					)}
				</div>

				{/* Conteúdo */}
				<div
					className={`flex-1 flex flex-col ${featured ? "relative z-10 w-full max-w-3xl" : ""}`}
				>
					{featured ? (
						<>
							<span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-white uppercase bg-primary">
								{article.slug}
							</span>
							<h2 className="font-serif text-4xl md:text-6xl text-white mb-4 leading-tight group-hover:underline decoration-1 underline-offset-8 decoration-primary/50">
								{article.title}
							</h2>
							<p className="font-sans text-white/80 text-lg mb-6 line-clamp-2">
								{article.excerpt}
							</p>
							<div className="flex items-center gap-4 text-white/60 text-sm font-sans uppercase tracking-wider">
								<span>{authorName}</span>
								<span className="w-1 h-1 rounded-full bg-primary" />
							</div>
						</>
					) : (
						<>
							<h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
								{article.title}
							</h3>
							<p className="font-sans text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
								{article.excerpt}
							</p>
							<div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs">
								<span className="font-bold uppercase tracking-widest text-foreground/50">
									{authorName}
								</span>
								<span className="font-serif italic text-primary">
									0 leitura
								</span>
							</div>
						</>
					)}
				</div>
			</article>
		</Link>
	);
}
