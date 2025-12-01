"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@workspace/ui/components/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

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
                {children}
            </NuqsAdapter>
        </NextThemesProvider >
    );
}
