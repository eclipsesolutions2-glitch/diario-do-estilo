import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArticleSlider } from "@/components/home/article-slide";
import { BrandTicker } from "@/components/home/brand-ticker";
import { DesignersSpotlightSession } from "@/components/home/designers-spotlight-session";
import { ArticleGridList } from "@/components/layout/article-grid-list";
import { HeroTitle } from "@/components/layout/hero-title";
import { action } from "@/core/actions";
import type { Article } from "@/core/schemas/article";

export default async function Home() {
	const result = await action.api.article.findFeatured({ limit: 6 });

	const data: Article[] = result.success ? result.data.data : [];

	return (
		<div>
			<section className="w-full">
				{data.length > 0 && data[1] && (
					<ArticleSlider articles={data} />
				)}
			</section>
			<HeroTitle
				title="Diário do Estilo"
				description="Tendências, estilo e criatividade"
				showLogo
				tag="Destaques"
			/>

			<section className="container mx-auto py-16 px-4">
				<div className="flex items-end justify-between mb-12 border-b border-border pb-4">
					<h2 className="font-serif text-4xl text-foreground">
						Artigos em destaque
					</h2>

					<Link href="/articles">
						<Button
							variant="link"
							className="group text-foreground hover:text-primary font-sans uppercase tracking-widest text-xs"
						>
							Ver todos
							<ArrowRight className="ml-2 w-4 h-4 -translate-x-2 group-hover:translate-x-0 transition-transform duration-200" />
						</Button>
					</Link>
				</div>

				{data.length > 0 ? (
					<ArticleGridList data={data} />
				) : (
					<div className="text-center text-muted-foreground py-20">
						Nenhum artigo em destaque encontrado
					</div>
				)}
			</section>

			<BrandTicker />
			<DesignersSpotlightSession />
		</div>
	);
}
