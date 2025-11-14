import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { article } from "@/core/actions/article";
import type { Article } from "@/core/schemas/article";
import { ArticleForm } from "../_components/articles/article-form";

export default async function ArticleDashboardPage() {
	const result = await article.findMany();
	const articles: Article[] = [];
	if (result.success) {
		for (let i = 0; i < articles.length; i++) {
			articles.push(articles[i]);
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

			<section>
				<div className="flex items-center justify-between">
					<Dialog>
						<DialogTrigger asChild>
							<Button>
								<Plus />
								<span>Novo Artigo</span>
							</Button>
						</DialogTrigger>
						<DialogContent>
							<ArticleForm />
						</DialogContent>
					</Dialog>
				</div>
				<pre>{JSON.stringify(articles, null, 2)}</pre>
				<pre>{JSON.stringify(result, null, 2)}</pre>
			</section>
		</div>
	);
}
