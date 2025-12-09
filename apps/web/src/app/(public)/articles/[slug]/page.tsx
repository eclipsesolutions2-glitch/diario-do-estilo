import { redirect } from "next/navigation";
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

	if (!result.success) {
		return <div>loading...</div>;
	}

	return (
		<div>
			<pre>{JSON.stringify({ params }, null, 2)}</pre>
			<pre>{JSON.stringify({ result }, null, 2)}</pre>
		</div>
	);
}
