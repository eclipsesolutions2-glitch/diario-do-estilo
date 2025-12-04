"use client";
import { env } from "@/lib/env";
import { Button } from "@workspace/ui/components/button";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export function GoToSite() {
    const router = useRouter();
    return (
        <Button type="button" onClick={() => router.push(env.NEXT_PUBLIC_SITE_URL)}>
            <Globe />
            <span>Ir para o site</span>
        </Button>
    );
}