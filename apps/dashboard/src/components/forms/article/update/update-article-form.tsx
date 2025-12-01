import { Article } from "@/core/schemas/article";

interface UpdateArticleFormProps {
    defaultValues: Article;
    onFinishSumit: () => void;
}

export function UpdateArticleForm({
    defaultValues,
    onFinishSumit,
}: UpdateArticleFormProps) {
    return <div>
        <pre>{JSON.stringify(defaultValues, null, 2)}</pre>
    </div>;
}