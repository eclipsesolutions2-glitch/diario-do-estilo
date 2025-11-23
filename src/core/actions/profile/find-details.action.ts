"use server";

import { cookies } from "next/headers";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import type { UserProfile } from "@/core/schemas/user";
import { env } from "@/lib/env";
import { cacheLife, cacheTag } from "next/cache";

export async function findDetailsAction(): Promise<ApiResponse<UserProfile>> {
	"use cache: private";
	cacheLife("seconds");
	cacheTag("profile-details");

	try {
		const storage = await cookies();
		const token = storage.get("dds-auth.session-token")?.value;

		if (!token) {
			return ResponseMapper.error(
				"Sessão expirada. Faça login novamente.",
			);
		}

		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(
			`${API_URL}/api/v1/auth/profile
`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			throw new Error(
				errorData?.message || "Falha ao buscar as detalhes do perfil",
			);
		}

		const data = await response.json().catch(() => null);
		return ResponseMapper.success(
			data,
			"Detalhes do perfil carregadas com sucesso.",
		);
	} catch (error) {
		console.error(
			"❌ Erro inesperado ao carregar detalhes do perfil:",
			error,
		);
		return ResponseMapper.error(
			"Erro inesperado ao carregar detalhes do perfil.",
		);
	}
}
