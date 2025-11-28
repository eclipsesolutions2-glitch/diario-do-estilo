import { UserProfile } from "@/core/schemas/user/profile.schema";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface GetUserProfileActionResponse {
    data: UserProfile
}

export async function getUserProfileAction(): Promise<ApiResponse<UserProfile>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");

    if (!token) {
        return ApiResponseBuilder.error("Precisa estar autenticado.");
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/profile`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });
        const json = await response.json().catch(() => null) as GetUserProfileActionResponse;

        if (!response.ok) {
            const msg = "Algo correu mal ao tentar buscar as informações de perfil";
            return ApiResponseBuilder.error(msg);
        }

        return ApiResponseBuilder.success(json.data);
    } catch (error) {
        const errorMessage = "Falha ao buscar as informações de perfil. ";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}