import { Suspense } from "react";
import { LinksList } from "@/components/link-list";

export default function LayoutTerms({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="container mx-auto px-4 py-12">
			{children}
			<div className="mt-12 pt-8 border-t">
				<Suspense fallback={null}>
					<LinksList />
				</Suspense>
			</div>
		</div>
	);
}
