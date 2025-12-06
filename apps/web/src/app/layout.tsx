import { Sora } from "next/font/google";

import "@workspace/ui/globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";

const fontSans = Sora({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Diário Do Estilo",
	description: "O Renascimento da Moda Africana na Cena Global",
	icons: {
		icon: "/logo-app.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={`${fontSans.variable} font-sans antialiased `}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
