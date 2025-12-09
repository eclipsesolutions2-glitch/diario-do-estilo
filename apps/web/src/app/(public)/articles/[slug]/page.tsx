import { redirect } from "next/navigation";
import { action } from "@/core/actions";

export default async function ArticleDetails({ params }) {
	if (!params.slug) {
		return redirect("/");
	}
	const result = await action.api.article.findOne(params.slug);

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
