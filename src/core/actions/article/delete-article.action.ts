"use server";

import { updateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";

export async function deleteArticleAction(
	slug: string,
): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token")?.value;

	if (!token) {
		return ResponseMapper.error("Sessão expirada. Faça login novamente.");
	}

	try {
		const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

		const response = await fetch(`${API_URL}/admin/articles/${slug}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			throw new Error(errorData?.message || "Falha ao excluir artigo");
		}

		updateTag("article-list");

		return ResponseMapper.success(true, "Artigo excluída com sucesso");
	} catch (error) {
		console.error("Erro ao excluir artigo:", error);
		return ResponseMapper.error(
			error instanceof Error
				? error.message
				: "Erro ao excluir artigo. Tente novamente.",
		);
	}
}
