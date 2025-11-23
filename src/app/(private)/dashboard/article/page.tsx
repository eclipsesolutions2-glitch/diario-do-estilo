export const dynamic = "force-dynamic";

import { article } from "@/core/actions/article";
import type { Article } from "@/core/schemas/article";
import { TableListArticle } from "../_components/layout/tables/article";

export default async function ArticleDashboardPage() {
	const result = await article.findMany();
	const articles: Article[] = [];
	if (result.success) {
		for (let i = 0; i < result.data.data.length; i++) {
			articles.push(result.data.data[i]);
		}
	}
	return (
		<div>
			<div className="mb-8">
				<h1 className="text-4xl font-serif font-bold text-foreground mb-2">
					Artigos
				</h1>
				<p className="text-muted-foreground font-light">
					Gerencie todo o conteúdo do seu blog
				</p>
			</div>

			<TableListArticle data={articles} />
		</div>
	);
}
