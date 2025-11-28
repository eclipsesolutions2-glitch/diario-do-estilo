"use server";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";
import { env } from "@/lib/env";

interface MarkOneReadNotificationParams {
    notificationId: number;
}

interface MarkOneReadNotificationResponse {
    message: string;
}

export async function markOneReadNotificationAction({ notificationId }: MarkOneReadNotificationParams): Promise<ApiResponse<MarkOneReadNotificationResponse>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");

    if (!token) {
        return ApiResponseBuilder.error("Precisa estar autenticado.");
    }

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/notifications/${notificationId}/read`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        });
        const json = await response.json().catch(() => null) as MarkOneReadNotificationResponse;

        if (!response.ok) {
            const msg = json.message ?? "Algo correu mal ao tentar marcar as notificações como lidas";
            return ApiResponseBuilder.error(msg);
        }
        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Falha ao marcar as notificações como lidas.";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}