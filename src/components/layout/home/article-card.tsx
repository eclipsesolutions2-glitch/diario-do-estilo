import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Article {
	id: number;
	category: string;
	title: string;
	excerpt: string;
	image: string;
	author: string;
	date: string;
	slug?: string;
}

export function ArticleCard({ article }: { article: Article }) {
	return (
		<Link href={`/article/${article.slug || "exemplo"}`}>
			<article className="group cursor-pointer">
				<div className="relative aspect-4/5 mb-4 overflow-hidden bg-muted">
					<Image
						src={article.image || "/images/placeholder.svg"}
						alt={article.title}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						fill
					/>
					<div className="absolute top-4 left-4">
						<span className="inline-block px-3 py-1 bg-white text-primary text-xs font-semibold uppercase tracking-wider">
							{article.category}
						</span>
					</div>
				</div>

				<div className="space-y-3">
					<h3 className="font-serif text-xl md:text-2xl font-bold leading-tight text-balance group-hover:text-primary transition-colors">
						{article.title}
					</h3>
					<p className="text-muted-foreground text-sm leading-relaxed text-pretty">
						{article.excerpt}
					</p>
					<div className="flex items-center justify-between pt-2">
						<div className="text-xs text-muted-foreground">
							<span className="font-medium text-foreground">
								{article.author}
							</span>
							<span className="mx-2">•</span>
							<span>{article.date}</span>
						</div>
						<ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
					</div>
				</div>
			</article>
		</Link>
	);
}

export default ArticleCard;
