import { TableListArticle } from "@/components/tables/article";
import { action } from "@/core/actions";
import { Article } from "@/core/schemas/article";

export default async function ArticlePage() {
  const result = await action.api.article.findMany();
  const articles: Article[] = [];

  if (result.success) {
    result.data.data.forEach((article) => {
      articles.push(article);
    });
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
