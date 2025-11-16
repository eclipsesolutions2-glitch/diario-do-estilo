"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	type CreateCategorySchemaValues,
	createCategorySchema,
} from "@/core/schemas/category/create-category.schema";

import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";

export async function createCategoryAction(
	data: CreateCategorySchemaValues,
): Promise<ApiResponse<boolean>> {
	try {
		const storage = await cookies();
		const token = storage.get("dds-auth.session-token")?.value;

		if (!token) {
			return ResponseMapper.error(
				"Sessão expirada. Faça login novamente.",
			);
		}
		console.log({ token });

		const parsed = createCategorySchema.safeParse(data);

		if (!parsed.success) {
			const firstIssue =
				parsed.error.issues[0]?.message ?? "Dados inválidos.";
			return ResponseMapper.error(firstIssue);
		}

		const API_URL = process.env.NEXT_PUBLIC_API_URL;
		if (!API_URL) {
			return ResponseMapper.error("API_URL não configurada no ambiente.");
		}

		const response = await fetch(`${API_URL}/api/v1/admin/categories`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(parsed.data),
			cache: "no-store",
		});

		console.log({ response });

		if (!response.ok) {
			const apiMsg =
				(await response.json().catch(() => null))?.message ??
				"Falha ao criar categoria";
			return ResponseMapper.error(apiMsg);
		}

		revalidateTag("categories-list", "max");

		return ResponseMapper.success(true, "Categoria criada com sucesso");
	} catch (error) {
		console.error("Erro ao criar categoria:", error);

		return ResponseMapper.error(
			error instanceof Error
				? error.message
				: "Erro inesperado ao criar categoria. Tente novamente.",
		);
	}
}
