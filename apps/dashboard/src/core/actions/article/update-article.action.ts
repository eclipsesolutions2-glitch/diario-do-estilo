"use server";
import { updateArticleSchema } from "@/core/schemas/article/update-article.schama";
import { env } from "@/lib/env";
import { ApiResponse, ApiResponseBuilder } from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";


export async function updateArticleAction(slug: string, formData: FormData): Promise<ApiResponse<boolean>> {
    const storage = await cookies();
    const token = storage.get("dds-auth.session-token");
    if (!token) {
        return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
    }

    if (!slug) {
        return ApiResponseBuilder.error("Dados inválidos");
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

    const parsed = updateArticleSchema.safeParse(row);
    if (!parsed.success) {
        return ApiResponseBuilder.error(parsed.error.message);
    }

    const body = new FormData();
    body.append("title", parsed.data.title);
    body.append("slug", parsed.data.slug);
    if (parsed.data.excerpt) body.append("excerpt", parsed.data.excerpt);
    body.append("content", parsed.data.content);

    /* if (parsed.data.is_published)
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
        ); */

    if (parsed.data.cover_image)
        body.append("cover_image", parsed.data.cover_image);

    /* if (parsed.data.gallery_images?.length) {
        parsed.data.gallery_images.forEach((file) => {
            body.append("gallery_images[]", file);
        });
    } */

    try {
        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/admin/articles/${slug}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token.value}`
            },
            body
        });
        if (!response.ok) {
            const json = await response.text().catch(() => null);
            const msg = json ?? "Algo correu mal ao tentar actualizar um artigo";
            return ApiResponseBuilder.error(msg);
        }
        return ApiResponseBuilder.success(true);
    } catch (error) {
        const errorMessage = "Falha ao actualizar um artigo";
        console.error(`❌ ERROR: ${errorMessage}`, error);
        return ApiResponseBuilder.error(errorMessage);
    }
}