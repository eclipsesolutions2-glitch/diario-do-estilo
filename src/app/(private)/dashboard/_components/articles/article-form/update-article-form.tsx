import type { Article } from "@/core/schemas/article";

interface UpdateArticleFormProps {
	defaultValues: Article;
	onFinishSumit: () => void;
}

export function UpdateArticleForm({
	defaultValues,
	onFinishSumit,
}: UpdateArticleFormProps) {
	return <div>dsd</div>;
}
