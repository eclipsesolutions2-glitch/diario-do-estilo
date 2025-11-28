import { updateProfileSchema, UpdateProfileSchemaValues, UserProfile } from "@/core/schemas/user/profile.schema";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface UpdateProfileActionResponse {
    message: string;
    user: UserProfile
}

export async function updateProfileAction(data: UpdateProfileSchemaValues): Promise<ApiResponse<UserProfile>> {
    const storage = await cookies();
    const token = storage.get("cookie-name");
    if (!token) {
        return ApiResponseBuilder.error("Precisa estar autenticado.");
    }

    const parsed = updateProfileSchema.safeParse(data);
    if (!parsed.success) {
        return ApiResponseBuilder.error("Preencha os campos obrigatórios");
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/profile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.value}`
            },
            body: JSON.stringify({
                name: parsed.data.name,
                username: parsed.data.username,
                email: parsed.data.email,
                bio: parsed.data.bio
            })
        });
        const json = await response.json().catch(() => null) as UpdateProfileActionResponse;

        if (!response.ok) {
            const msg = json.message ?? "Algo correu mal ao tentar actualizar as informações de perfil";
            return ApiResponseBuilder.error(msg);
        }

        return ApiResponseBuilder.success(json.user, json.message);
    } catch (error) {
        const errorMessage = "Falha ao actualizar as informações de perfil. ";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}