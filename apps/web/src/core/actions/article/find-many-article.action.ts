"use server";
import {
	type ApiResponse,
	ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import type { Article } from "@/core/schemas/article";
import { env } from "@/lib/env";

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

export async function findManyArticleAction(): Promise<
	ApiResponse<FindManyArticleActionResponse>
> {
	try {
		const { NEXT_PUBLIC_API_URL } = env;
		const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/articles`, {
			method: "GET",
			next: {
				tags: ["list-articles"],
			},
		});
		const json = (await response
			.json()
			.catch(() => null)) as FindManyArticleActionResponse;
		if (!response.ok) {
			const msg = "Algo correu mal ao tentar buscar artigos";
			return ApiResponseBuilder.error(msg);
		}
		console.log({ json });
		return ApiResponseBuilder.success(json);
	} catch (error) {
		const errorMessage = "Falha ao buscar artigos";
		console.error(`❌ ERROR: ${errorMessage}`, error);
		return ApiResponseBuilder.error(errorMessage);
	}
}
