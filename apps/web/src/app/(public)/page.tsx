import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArticleGridList } from "@/components/layout/article-grid-list";
import { BrandTicker } from "@/components/layout/brand-ticker";
import { HeroTitle } from "@/components/layout/hero-title";
import { action } from "@/core/actions";
import type { Article } from "@/core/schemas/article";

export default async function Home() {
	const result = await action.api.article.findMany();
	const data: Article[] = [];
	if (result.success) {
		result.data.data.forEach((item) => {
			data.push(item);
		});
	}

	return (
		<div>
			<HeroTitle title="A Nova Vanguarda Africana" showLogo />
			<section className="py-12 container m-auto">
				<div className="flex items-end justify-between mb-12 border-b border-border pb-4">
					<h2 className="font-serif text-4xl text-foreground">
						Destaques
					</h2>
					<Link href="/articles">
						<Button
							variant="link"
							className="group text-foreground hover:text-primary font-sans uppercase tracking-widest text-xs"
						>
							Ver Todos{" "}
							<ArrowRight className="ml-2 w-4 h-4 -translate-x-2 group-hover:translate-x-0 transition-transform duration-200" />
						</Button>
					</Link>
				</div>

				{/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
				{data && <ArticleGridList data={data} />}
			</section>
			<BrandTicker />
		</div>
	);
}
