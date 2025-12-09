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
	title: "Diario do Estilo",
	icons: {
		icon: ["/logotipo-d-t-white.webp"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontDisplayy.variable} font-sans antialiased `}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
