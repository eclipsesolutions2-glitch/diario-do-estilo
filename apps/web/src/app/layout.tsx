import { Italiana, Sora } from "next/font/google";

import "@workspace/ui/globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";

const fontSans = Sora({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontDisplayy = Italiana({
	subsets: ["latin"],
	variable: "--font-displayy",
	weight: "400",
});

export const metadata: Metadata = {
	title: {
		default: "Diário do Estilo",
		template: "%s | Diário do Estilo",
	},

	description:
		"Diário do Estilo — Moda, lifestyle e tendências com conteúdo exclusivo.",

	icons: {
		icon: [{ url: "/logotipo-d-t-white.webp", type: "image/webp" }],
		apple: [{ url: "/logotipo-d-t-white.webp" }],
	},

	keywords: [],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontDisplayy.variable} text-brand-950 font-sans antialiased `}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
