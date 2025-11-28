import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";
import { env } from "process";

interface FindManyNotificationParams {
    page?: number;
}

interface FindManyNotificationResponse {
    data: Notification[];
    "current_page": number;
    "per_page": number;
    total: number;
    "last_page": number;
}

export async function findManyNotificationAction({ page = 1 }: FindManyNotificationParams): Promise<ApiResponse<Notification[]>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");

    if (!token) {
        return ApiResponseBuilder.error("Precisa estar autenticado.");
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/notifications?page=${page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });
        const json = await response.json().catch(() => null) as FindManyNotificationResponse;

        if (!response.ok) {
            const msg = "Algo correu mal ao tentar buscar as notificações";
            return ApiResponseBuilder.error(msg);
        }
        return ApiResponseBuilder.success(json.data);
    } catch (error) {
        const errorMessage = "Falha ao buscar as notificações.";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}