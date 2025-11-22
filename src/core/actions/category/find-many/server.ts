"use server";
import { cookies } from "next/headers";
import type { Category } from "@/core/schemas/category";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import { env } from "@/lib/env";

export async function findManyCategoryAction(): Promise<
	ApiResponse<Category[]>
> {
	try {
		const storage = await cookies();
		const token = storage.get("dds-auth.session-token")?.value;

		if (!token) {
			return ResponseMapper.error(
				"Sessão expirada. Faça login novamente.",
			);
		}

		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(`${API_URL}/api/v1/admin/categories`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			next: {
				tags: ["categories-list"],
			},
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			throw new Error(
				errorData?.message || "Falha ao buscar as categorias",
			);
		}

		const data = await response.json().catch(() => null);
		return ResponseMapper.success(
			data,
			"Categorias carregadas com sucesso.",
		);
	} catch (error) {
		console.error("❌ Erro inesperado ao carregar categorias:", error);
		return ResponseMapper.error("Erro inesperado ao carregar categorias.");
	}
}
