"use server";
import { registerUserSchema, RegisterUserSchemaValues } from "@/core/schemas/auth/register-user.schema";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface RegisterUserResponse {
    message: string;
    token: string;
    data: User;
}

export async function registerUserAction(
    data: RegisterUserSchemaValues,
): Promise<ApiResponse<RegisterUserResponse>> {
    const parsed = registerUserSchema.safeParse(data);
    if (!parsed.success) {
        return ApiResponseBuilder.error(parsed.error.message);
    }
    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: parsed.data.name,
                username: parsed.data.username,
                email: parsed.data.email,
                password: parsed.data.password,
                password_confirmation: parsed.data.passwordConfirmation,
                role: parsed.data.role,
            }),
        });

        const json = await response.json().catch(() => null);

        if (!response.ok) {
            const msg = "Verifique os dados e tente novamente.";
            return ApiResponseBuilder.error(msg);
        }

        const storage = await cookies();
        storage.set("dds-auth.session-token", json.token, {
            maxAge: 60 * 60 * 24 * 1, // 1 dia
            path: "/",
        });

        return ApiResponseBuilder.success(json);
    } catch (error) {
        const errorMessage = "Erro inesperado ao registrar usuário";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}