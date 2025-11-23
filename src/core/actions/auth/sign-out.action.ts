"use server";

import { updateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import { env } from "@/lib/env";

export async function signOutAction(): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token");

	if (!token) {
		return ResponseMapper.error("Precisa estar autenticado.");
	}

	try {
		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(`${API_URL}/api/v1/auth/logout`, {
			method: "POST",
			headers: { Authorization: `Bearer ${token.value}` },
		});

		const data = await response.json().catch(() => null);

		if (!response.ok) {
			return ResponseMapper.error(
				data?.message ?? "Falha ao terminar a sessão",
			);
		}

		storage.delete("dds-auth.session-token");
		updateTag("user-session");
		return ResponseMapper.success(true);
	} catch (error) {
		console.error("❌ Erro inesperado no logout: ", error);
		return ResponseMapper.error("Erro ao fazer o logout");
	}
}
