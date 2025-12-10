import { redirect } from "next/navigation";
import { ArticleRenderer } from "@/components/layout/article-renderer";
import { action } from "@/core/actions";

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

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

	const article = result.data;

	return <ArticleRenderer data={article} />;
}
