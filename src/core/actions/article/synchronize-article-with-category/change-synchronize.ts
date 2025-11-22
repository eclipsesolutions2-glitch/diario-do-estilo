"use server";

import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import { desynchronizeArticleOfCategory } from "./desynchronize";
import { synchronizeArticleWithCategory } from "./synchronize";

export async function changeSynchronizeArticleOfCategory(
	slug: string,
	categoryId: number,
	currentCategoryId: number,
): Promise<ApiResponse<boolean>> {
	try {
		if (categoryId === currentCategoryId) {
			return ResponseMapper.success(true);
		}

		const desynchronize = await desynchronizeArticleOfCategory(
			slug,
			currentCategoryId,
		);

		if (!desynchronize.success) {
			return ResponseMapper.error("Falha ao mudar a categoria");
		}

		const synchronize = await synchronizeArticleWithCategory(
			slug,
			categoryId,
		);

		if (!synchronize.success) {
			return ResponseMapper.error("Falha ao mudar a categoria");
		}

		return ResponseMapper.success(
			true,
			"Mudandaça de categoria bem sucedida.",
		);
	} catch (error) {
		console.error(
			"Erro ao alterar sincronia do artigo com a categoria:",
			error,
		);
		return ResponseMapper.error(
			"Erro ao alterar sincronia do artigo com a categoria. Verifique os dados e tente novamente.",
		);
	}
}
