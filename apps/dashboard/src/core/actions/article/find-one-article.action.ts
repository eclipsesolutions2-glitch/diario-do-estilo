"use server";
import { Article } from "@/core/schemas/article";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface FindOneArticleActionParams {
    slug: string;
}

export async function FindOneArticleAction({ slug }: FindOneArticleActionParams): Promise<ApiResponse<Article>> {
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
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/articles/${slug}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });
        const json = await response.json().catch(() => null) as Article;
        if (!response.ok) {
            const msg = "Algo correu mal ao tentar buscar artigo";
            return ApiResponseBuilder.error(msg);
        }
        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Falha ao buscar artigo";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}