"use server";

import { cookies } from "next/headers";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import { env } from "@/lib/env";
import { updateTag } from "next/cache";

export async function markReadNotificationAction(): Promise<
	ApiResponse<Notification[]>
> {
	try {
		const storage = await cookies();
		const token = storage.get("dds-auth.session-token");

		if (!token) {
			return ResponseMapper.error("Precisa estar autenticado.");
		}

		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(`${API_URL}/api/v1/auth/notifications`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token.value}`,
				"Content-Type": "application/json",
			},
		});

		const data = await response.json().catch(() => null);

		if (!response.ok) {
			const msg = data?.message ?? "Falha ao carregar noticações.";
			return ResponseMapper.error(msg);
		}

		updateTag("get-notification");

		return ResponseMapper.success(
			data.data,
			"Notificações carregadas com sucesso.",
		);
	} catch (error) {
		console.error("❌ Erro inesperado ao carregar noticaçõess:", error);
		return ResponseMapper.error("Erro inesperado ao carregar noticaçõess.");
	}
}
