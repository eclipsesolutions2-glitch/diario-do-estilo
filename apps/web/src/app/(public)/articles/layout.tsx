import { ArticleTag } from "@/components/layout/article-tag";

export default function ArticleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			{children}
			<ArticleTag />
		</div>
	);
}
