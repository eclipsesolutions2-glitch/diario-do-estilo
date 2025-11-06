import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

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
					<main className="flex-1">{children}</main>
				</NuqsAdapter>
				<Analytics />
			</body>
		</html>
	);
}
