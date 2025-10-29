import type { Metadata } from "next";
import "./globals.css";

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
			<body>{children}</body>
		</html>
	);
}
