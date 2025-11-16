"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	type CreateArticleSchemaValues,
	createArticleSchema,
} from "@/core/schemas/article/create-article.schema";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";

export async function CreateArticleAction(
	data: CreateArticleSchemaValues,
): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token")?.value;

	if (!token) {
		return ResponseMapper.error("Sessão expirada. Faça login novamente.");
	}

	const parsed = createArticleSchema.safeParse(data);
	if (!parsed.success) {
		return ResponseMapper.error(parsed.error.message);
	}

	try {
		const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

		const formData = new FormData();
		formData.append("title", parsed.data.title);
		formData.append("slug", parsed.data.slug);
		formData.append("excerpt", parsed.data.excerpt ?? "");
		formData.append("content", parsed.data.content);
		formData.append("is_published", String(parsed.data.is_published));
		formData.append("is_featured", String(parsed.data.is_featured));

		if (parsed.data.cover_image) {
			formData.append("cover_image", parsed.data.cover_image);
		}

		if (parsed.data.gallery_images) {
			parsed.data.gallery_images.forEach((img) => {
				formData.append("gallery_images[]", img);
			});
		}

		const response = await fetch(`${API_URL}/admin/articles`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		if (!response.ok) {
			const err = await response.text();
			throw new Error(err || "Falha ao criar artigo");
		}

		revalidateTag("get-article", "max");

		return ResponseMapper.success(true);
	} catch (error) {
		console.error("Erro ao criar artigo:", error);
		return ResponseMapper.error(
			"Erro ao criar o artigo. Verifique os dados e tente novamente.",
		);
	}
}
