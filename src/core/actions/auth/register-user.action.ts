"use server";

import { cookies } from "next/headers";
import {
	type RegisterUserSchemaValues,
	registerUserSchema,
} from "@/core/schemas/auth/register-user.schema";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import { env } from "@/lib/env";
import { updateTag } from "next/cache";

interface RegisterUserResponse {
	message: string;
	user: {
		id: number;
		name: string;
		username: string;
		email: string;
		role: "reader" | "admin";
		bio?: string;
		avatar_url?: string;
		can_upload_avatar: boolean;
	};
	token: string;
}

export async function registerUserAction(
	data: RegisterUserSchemaValues,
): Promise<ApiResponse<RegisterUserResponse>> {
	const parsed = registerUserSchema.safeParse(data);
	if (!parsed.success) {
		return ResponseMapper.error(parsed.error.message);
	}

	try {
		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(`${API_URL}/api/v1/auth/register`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: parsed.data.name,
				username: parsed.data.username,
				email: parsed.data.email,
				password: parsed.data.password,
				password_confirmation: parsed.data.passwordConfirmation,
				role: parsed.data.role,
			}),
		});

		const data = await response.json().catch(() => null);

		if (!response.ok) {
			return ResponseMapper.error(
				data?.message ?? "Verifique os dados e tente novamente.",
			);
		}

		const storage = await cookies();
		storage.set("dds-auth.session-token", data.token, {
			maxAge: 60 * 60 * 24 * 1, // 1 dia
			path: "/",
		});

		updateTag("user-session");

		return ResponseMapper.success(data);
	} catch (error) {
		console.error("❌ Erro inesperado no login: ", error);
		return ResponseMapper.error("Erro ao fazer o login");
	}
}
