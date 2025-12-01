"use server";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface RestoreUserActionParams {
    userId: string;
}

interface RestoreUserActionResponse {
    message: string;
    user: User
}

export async function restoreUserAction({ userId }: RestoreUserActionParams): Promise<ApiResponse<RestoreUserActionResponse>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");
    if (!token) {
        return ApiResponseBuilder.error("Precisa estar autenticado.");
    }

    if (!userId) {
        return ApiResponseBuilder.error("Identificador do usuário não enviado");
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/users/${userId}/restore`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });

        const json = await response.json().catch(() => null) as RestoreUserActionResponse;
        if (!response.ok) {
            const msg = json.message ?? "Algo correu mal ao tentar reativar a conta de" + userId;
            return ApiResponseBuilder.error(msg);
        }

        revalidateTag("list-users");
        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Falha ao  reativar a conta. ";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}