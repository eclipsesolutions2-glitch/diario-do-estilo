import { ArticleTag } from "@/components/layout/article-tag";

export default function PublicLayout({
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
