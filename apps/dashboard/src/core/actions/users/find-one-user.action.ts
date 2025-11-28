"use server";
import { env } from "@/lib/env";
import { cookies } from "next/headers";

interface FindOneUserActionParams {
    userId: string;
}

export async function findOneUserAction({ userId }: FindOneUserActionParams) {
    const storage = await cookies();
    const token = storage.get("cookie-name");
    if (!token) {
        return "Precisa estar autenticado.";
    }

    if (!userId) {
        return "Identificador do usuário não enviado";
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/users/${userId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });
        if (!response.ok) {
            return "Algo correu mal ao tentar buscar os dados de" + userId;
        }

        const json = response.json().catch(() => null);
        return json;
    } catch (error) {
        const errorMessage = "Falha ao buscar os dados. ";
        console.error(errorMessage, error);
        throw new Error(errorMessage);
    }
}