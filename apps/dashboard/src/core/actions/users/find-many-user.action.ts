"use server";
import { env } from "@/lib/env";
import { cookies } from "next/headers";

interface FindManyUserActionParams {
    search?: string;
    status: "all" | "active" | "trashed"
}

export async function findManyUserAction({ search, status = "all" }: FindManyUserActionParams) {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");
    if (!token) {
        return "Precisa estar autenticado.";
    }
    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`
            },
            body: JSON.stringify({
                search: search ?? undefined,
                status
            })
        });
        if (!response.ok) {
            return "Algo correu mal ao tentar buscar os dados";
        }

        const json = await response.json().catch(() => null);
        // Mapper dos dados
        return json;
    } catch (error) {
        const errorMessage = "Falha ao buscar os dados. ";
        console.error(errorMessage, error);
        throw new Error(errorMessage);
    }
}