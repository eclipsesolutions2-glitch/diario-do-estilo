"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { createArticleSchema } from "@/core/schemas/article/create-article.schema";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";

export async function CreateArticleAction(
	formData: FormData,
): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token")?.value;

	if (!token) {
		return ResponseMapper.error("Sessão expirada. Faça login novamente.");
	}

	const row = {
		title: formData.get("title"),
		slug: formData.get("slug"),
		excerpt: formData.get("excerpt") || "",
		content: formData.get("content"),
		is_published: formData.get("is_published") || "",
		is_featured: formData.get("is_featured") || "",
		cover_image: (formData.get("cover_image") as File) || null,
		gallery_images: formData
			.getAll("gallery_images")
			.filter(Boolean) as File[],
	};

	const parsed = createArticleSchema.safeParse(row);
	if (!parsed.success) {
		return ResponseMapper.error(parsed.error.message);
	}

	const body = new FormData();
	body.append("title", parsed.data.title);
	body.append("slug", parsed.data.slug);
	if (parsed.data.excerpt) body.append("excerpt", parsed.data.excerpt);
	body.append("content", parsed.data.content);

	if (parsed.data.is_published)
		body.append(
			"is_published",
			parsed.data.is_published !== null
				? String(parsed.data.is_published)
				: "",
		);
	if (parsed.data.is_featured)
		body.append(
			"is_featured",
			parsed.data.is_featured !== null
				? String(parsed.data.is_featured)
				: "",
		);

	if (parsed.data.cover_image)
		body.append("cover_image", parsed.data.cover_image);

	if (parsed.data.gallery_images?.length) {
		parsed.data.gallery_images.forEach((file) => {
			body.append("gallery_images[]", file);
		});
	}

	try {
		const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
		const response = await fetch(`${API_URL}/api/v1/admin/articles`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body,
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
