"use server";

import { cookies } from "next/headers";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";

export async function desynchronizeArticleOfCategory(
	slug: string,
	categoryId: number,
): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token")?.value;

	if (!token) {
		return ResponseMapper.error("Sessão expirada. Faça login novamente.");
	}
	try {
		const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
		const response = await fetch(
			`${API_URL}/api/v1/admin/articles/${slug}/categories`,
			{
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					category_id: categoryId,
				}),
			},
		);

		if (!response.ok) {
			const err = await response.text();
			throw new Error(
				err || "Falha ao desassociar a categoria de um artigo",
			);
		}
		return ResponseMapper.success(true);
	} catch (error) {
		console.error("Erro ao desassociar a categoria de um artigo:", error);
		return ResponseMapper.error(
			"Erro ao desassociar a categoria de um artigo. Verifique os dados e tente novamente.",
		);
	}
}
