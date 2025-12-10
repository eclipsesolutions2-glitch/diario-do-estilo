"use client";

import { Toaster } from "@workspace/ui/components/sonner";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type * as React from "react";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="ligth"
			enableSystem
			disableTransitionOnChange
			enableColorScheme
		>
			<Toaster />
			<NuqsAdapter>
				<div className="min-h-screen flex flex-col">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</NuqsAdapter>
		</NextThemesProvider>
	);
}
