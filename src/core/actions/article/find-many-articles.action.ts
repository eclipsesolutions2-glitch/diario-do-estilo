"use server";
import { cookies } from "next/headers";
import type { Article } from "@/core/schemas/article";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import { env } from "@/lib/env";

interface ArticlesResponse {
	data: Article[];
	meta: {
		total: number;
		per_page: number;
	};
}

export async function findManyArticlesAction(): Promise<
	ApiResponse<ArticlesResponse>
> {
	try {
		const storage = await cookies();
		const token = storage.get("dds-auth.session-token");

		if (!token) {
			return ResponseMapper.error("Precisa estar autenticado.");
		}

		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(`${API_URL}/api/v1/admin/articles`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token.value}`,
				"Content-Type": "application/json",
			},
			next: {
				tags: ["article-list"],
			},
		});

		const data = await response.json().catch(() => null);

		if (!response.ok) {
			const msg = data?.message ?? "Falha ao carregar article.";
			return ResponseMapper.error(msg);
		}

		return ResponseMapper.success(data, "Artigos carregados com sucesso.");
	} catch (error) {
		console.error("❌ Erro inesperado ao carregar articles:", error);
		return ResponseMapper.error("Erro inesperado ao carregar articles.");
	}
}
