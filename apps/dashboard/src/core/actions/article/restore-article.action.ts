"use server";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface RestoreArticleActionParams {
    slug: string;
}

export async function restoreArticleAction({ slug }: RestoreArticleActionParams): Promise<ApiResponse<{ message: string }>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");
    if (!token) {
        return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
    }

    if (!slug) {
        return ApiResponseBuilder.error("Dados inválidos");
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/admin/articles/${slug}/restore`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });
        const json = await response.json().catch(() => null);
        if (!response.ok) {
            const msg = "Algo correu mal ao tentar restaurar um artigo";
            return ApiResponseBuilder.error(msg);
        }
        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Falha ao restaurar um artigo";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}