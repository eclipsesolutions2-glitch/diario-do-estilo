"use server";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface FindManyUserActionParams {
    search?: string;
    status: "all" | "active" | "trashed"
}

interface FindManyUserActionResponse {
    search: string
    status: string
    total: number
    grouped: {
        admin: UserBase
        editor: UserBase
        reader: UserBase
    }
}
interface UserBase {
    total: number
    users: User[]
}

export async function findManyUserAction({ search, status = "all" }: FindManyUserActionParams): Promise<ApiResponse<FindManyUserActionResponse>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");
    if (!token) {
        return ApiResponseBuilder.error("Precisa estar autenticado.");
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
        const json = await response.json().catch(() => null) as FindManyUserActionResponse;
        if (!response.ok) {
            const msg = "Algo correu mal ao tentar buscar os dados";
            return ApiResponseBuilder.error(msg);
        }


        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Falha ao buscar os dados. ";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}