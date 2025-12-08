import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
