"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@workspace/ui/components/sonner";
import { SidebarProvider } from "@workspace/ui/components/sidebar";

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
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </NextThemesProvider >
    );
}
