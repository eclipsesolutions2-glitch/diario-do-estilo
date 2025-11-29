"use server";

import { cookies } from "next/headers";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { env } from "@/lib/env";

export async function synchronizeArticleWithCategory(
    slug: string,
    categoryId: number,
): Promise<ApiResponse<boolean>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token")?.value;

    if (!token) {
        return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
    }
    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/articles/${slug}/categories`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    category_id: categoryId,
                }),
            },
        );

        if (!response.ok) {
            const err = await response.text();
            ApiResponseBuilder.error(
                err || "Falha ao associar a categoria de um artigo",
            );
        }
        return ApiResponseBuilder.success(true);
    } catch (error) {
        const errorMessage = "Erro ao associar a categoria de um artigo. Verifique os dados e tente novamente.";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}