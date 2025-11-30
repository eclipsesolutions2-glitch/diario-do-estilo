"use client";
import { Button } from "@workspace/ui/components/button";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export function GoToSite() {
    const router = useRouter();
    return (
        <Button type="button" onClick={() => router.push("/")}>
            <Globe />
            <span>Ir para o site</span>
        </Button>
    );
}