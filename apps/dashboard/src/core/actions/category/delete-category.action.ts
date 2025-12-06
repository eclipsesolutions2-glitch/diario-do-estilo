"use server";
import {
	type ApiResponse,
	ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { env } from "@/lib/env";

export async function deleteCategoryAction({
	slug,
}: {
	slug: string;
}): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token");
	if (!token) {
		return ApiResponseBuilder.error(
			"Sessão expirada. Faça login novamente.",
		);
	}

	if (!slug) {
		return ApiResponseBuilder.error("Dados inválidos");
	}

	try {
		const { NEXT_PUBLIC_API_URL } = env;
		const response = await fetch(
			`${NEXT_PUBLIC_API_URL}/api/v1/admin/categories/${slug}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token.value}`,
				},
			},
		);

		const json = await response.json().catch(() => null);
		if (!response.ok) {
			const msg = "Algo correu mal ao tentar apagar categoria";
			return ApiResponseBuilder.error(msg);
		}

		revalidateTag("list-categories");
		return ApiResponseBuilder.success(json);
	} catch (error) {
		const errorMessage = "Falha ao apagar categoria";
		console.error(`❌ ERROR: ${errorMessage}`, error);
		return ApiResponseBuilder.error(errorMessage);
	}
}
