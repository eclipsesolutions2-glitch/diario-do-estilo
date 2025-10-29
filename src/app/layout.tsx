import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
	title: "Diário Do Estilo",
	description: "O Renascimento da Moda Africana na Cena Global",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className="flex flex-col min-h-dvh">
				<NuqsAdapter>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</NuqsAdapter>
				<Analytics />
			</body>
		</html>
	);
}
