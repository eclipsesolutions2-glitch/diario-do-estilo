import type React from "react";
import { Suspense } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Suspense fallback={null}>
				<Header />
			</Suspense>
			<div>{children}</div>
			<Footer />
		</div>
	);
}
