"use server";

import { Category } from "@/core/schemas/category";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

export async function findOneCategoryAction({ slug }: { slug: string }): Promise<ApiResponse<Category[]>> {
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
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/admin/categories/${slug}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });
        const json = await response.json().catch(() => null);
        if (!response.ok) {
            const msg = "Algo correu mal ao tentar buscar categoria";
            return ApiResponseBuilder.error(msg);
        }
        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Falha ao buscar categoria";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}