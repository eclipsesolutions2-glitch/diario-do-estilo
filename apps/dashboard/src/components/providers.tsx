"use client";

import { Toaster } from "@workspace/ui/components/sonner";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type * as React from "react";

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
			<NuqsAdapter>{children}</NuqsAdapter>
		</NextThemesProvider>
	);
}
