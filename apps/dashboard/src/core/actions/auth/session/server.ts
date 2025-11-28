"use server";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface GetSessionResponse {
    message: string,
    user: User
}

export async function getSession(): Promise<ApiResponse<User>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");

    if (!token) {
        return ApiResponseBuilder.error("Precisa estar autenticado.");
    }
    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/validate-token`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token.value}`,
                Accept: "aplication/json",
            },
        });

        const json = await response.json().catch(() => null) as GetSessionResponse;
        if (!response.ok) {
            const msg = "Usuário não autenticado";
            return ApiResponseBuilder.error(msg);
        }

        return ApiResponseBuilder.success(json.user);
    } catch (error) {
        const errorMessage = "Erro inesperado ao buscar dados usuário";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}