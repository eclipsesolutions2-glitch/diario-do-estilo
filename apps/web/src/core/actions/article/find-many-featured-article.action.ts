"use server";

import {
	type ApiResponse,
	ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import type { Article } from "@/core/schemas/article";
import { env } from "@/lib/env";

interface FindManyArticleActionParams {
	limit?: number;
}

interface FindManyArticleActionResponse {
	data: Article[];
	meta: Meta;
}

interface Meta {
	current_page: number;
	last_page: number;
	per_page: number;
	total: number;
}

export async function findManyFeaturedArticleAction(
	params?: FindManyArticleActionParams,
): Promise<ApiResponse<FindManyArticleActionResponse>> {
	try {
		const limit = params?.limit ?? 6;

		const endpoint = new URL(
			"/api/v1/articles/featured",
			env.NEXT_PUBLIC_API_URL,
		);

		endpoint.searchParams.set("limit", String(limit));

		const response = await fetch(`${endpoint}`, {
			method: "GET",
			next: { revalidate: 60 },
		});

		if (!response.ok) {
			return ApiResponseBuilder.error(
				"Algo correu mal ao tentar buscar artigos em destaque",
			);
		}

		const json = (await response
			.json()
			.catch(() => null)) as FindManyArticleActionResponse;

		if (!json) {
			return ApiResponseBuilder.error("Resposta inválida da API");
		}

		return ApiResponseBuilder.success(json);
	} catch (error) {
		console.error("❌ Erro ao buscar artigos em destaque:", error);
		return ApiResponseBuilder.error("Falha ao buscar artigos em destaque");
	}
}
