import { ArticleToolbar } from "@/components/article/article-toolbar";
import { HeroTitle } from "@/components/layout/hero-title";
import { action } from "@/core/actions";
import type { Article } from "@/core/schemas/article";

export default async function Articles() {
	const result = await action.api.article.findMany();
	const articles: Article[] = [];

	if (result.success) {
		result.data.data.forEach((item) => {
			articles.push(item);
		});
	}

	return (
		<>
			<div className="bg-primary/5">
				<HeroTitle
					title="Artigos"
					description="Explora os conteúdos mais recentes"
					showLogo
					tag="Conteúdo"
				/>
			</div>

			<div className="container m-auto py-12">
				<ArticleToolbar articles={articles} />
			</div>
		</>
	);
}
