"use server";

import { cookies } from "next/headers";
import {
	type SignInSchemaValues,
	signInSchema,
} from "@/core/schemas/auth/sign-in.schema";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.meppers";
import { env } from "@/lib/env";

interface SignInResponse {
	message: string;
	token: string;
}

export async function signInAction(
	data: SignInSchemaValues,
): Promise<ApiResponse<SignInResponse>> {
	const parsed = signInSchema.safeParse(data);
	if (!parsed.success) {
		return ResponseMapper.error(parsed.error.message);
	}

	try {
		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(`${API_URL}/api/v1/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				login: parsed.data.email,
				password: parsed.data.password,
			}),
		});

		const data = await response.json().catch(() => null);

		if (!response.ok) {
			return ResponseMapper.error(
				data?.message ?? "Email ou senha inválidos",
			);
		}

		const storage = await cookies();
		storage.set("dds-auth.session-token", data.token, {
			maxAge: 60 * 60 * 24 * 1, // 1 dia
			path: "/",
		});

		return ResponseMapper.success(data);
	} catch (error) {
		console.error("❌ Erro inesperado no login: ", error);
		return ResponseMapper.error("Erro ao fazer o login");
	}
}
