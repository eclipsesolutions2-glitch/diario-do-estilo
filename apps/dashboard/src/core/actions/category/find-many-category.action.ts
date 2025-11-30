"use server";

import { Category } from "@/core/schemas/category";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

export async function findManyCategoryAction(): Promise<ApiResponse<Category[]>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");
    if (!token) {
        return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/admin/categories`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.value}`
            },
            next: {
                tags: ["list-categories"]
            }
        });
        const json = await response.json().catch(() => null);
        if (!response.ok) {
            const msg = "Algo correu mal ao tentar buscar categorias";
            return ApiResponseBuilder.error(msg);
        }
        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Falha ao buscar categorias";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}