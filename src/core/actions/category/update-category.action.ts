"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	type UpdateCategorySchemaValues,
	updateCategorySchema,
} from "@/core/schemas/category/update-category.schema";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";

export async function updateCategoryAction(
	slug: string,
	data: UpdateCategorySchemaValues,
): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token")?.value;

	if (!token) {
		return ResponseMapper.error("Sessão expirada. Faça login novamente.");
	}

	const parsed = updateCategorySchema.safeParse(data);

	if (!parsed.success) {
		return ResponseMapper.error(parsed.error.issues[0].message);
	}

	try {
		const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

		const response = await fetch(`${API_URL}/admin/categories/${slug}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: parsed.data.name,
				description: parsed.data.description,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			throw new Error(
				errorData?.message || "Falha ao atualizar categoria",
			);
		}

		revalidateTag("categories-list", "max");
		revalidateTag(`category-${slug}`, "max");

		return ResponseMapper.success(true, "Categoria atualizada com sucesso");
	} catch (error) {
		console.error("Erro ao atualizar categoria:", error);
		return ResponseMapper.error(
			error instanceof Error
				? error.message
				: "Erro ao atualizar categoria. Tente novamente.",
		);
	}
}
