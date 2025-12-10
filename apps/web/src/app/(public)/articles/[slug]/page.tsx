import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ArticleRenderer } from "@/components/layout/article-renderer";
import { action } from "@/core/actions";
import type { Article } from "@/core/schemas/article";

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

function ArticleContent({ article }: { article: Article }) {
	return <ArticleRenderer data={article} />;
}

export default async function ArticleDetails({ params }: PageProps) {
	const { slug } = await params;

	if (!slug) {
		redirect("/");
	}

	const result = await action.api.article.findOne({ slug });

	if (!result.success || !result.data) {
		return (
			<div className="min-h-screen flex items-center justify-center text-muted">
				Não foi possível carregar o artigo
			</div>
		);
	}

	return (
		<Suspense
			fallback={
				<div className="min-h-screen flex items-center justify-center">
					Carregando...
				</div>
			}
		>
			<ArticleContent article={result.data} />
		</Suspense>
	);
}
