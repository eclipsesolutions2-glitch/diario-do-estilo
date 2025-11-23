"use server";

import { cookies } from "next/headers";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import type { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import { cacheLife, cacheTag } from "next/cache";

export async function getSession(): Promise<ApiResponse<User>> {
	"use cache: private";
	cacheLife("seconds");
	cacheTag("user-session");
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token");

	if (!token) {
		return ResponseMapper.error("Precisa estar autenticado.");
	}

	try {
		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(`${API_URL}/api/v1/auth/validate-token`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token.value}`,
				Accept: "aplication/json",
			},
		});

		const data = await response.json().catch(() => null);

		if (!response.ok) {
			return ResponseMapper.error(
				data?.message ?? "Usuário não autenticado.",
			);
		}

		return ResponseMapper.success(data.user);
	} catch (error) {
		console.error(
			"❌ Erro inesperado ao pegar dados do usuário autenticado: ",
			error,
		);
		return ResponseMapper.error(
			"Erro inesperado ao pegar dados do usuário autenticado",
		);
	}
}
