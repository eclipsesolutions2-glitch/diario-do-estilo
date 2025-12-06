"use server";

import { createArticleSchema } from "@/core/schemas/article/create-article.schama";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function createArticleAction(
  formData: FormData,
): Promise<ApiResponse<boolean>> {
  const storage = await cookies();
  const token = storage.get("dds-auth.session-token");

  if (!token) {
    return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
  }

  const toBool = (v: FormDataEntryValue | null) =>
    v === "true" || v === "on" || v === "1";

  const row = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt") || "",
    content: formData.get("content"),

    is_published: toBool(formData.get("is_published")),
    is_featured: toBool(formData.get("is_featured")),

    cover_image: (formData.get("cover_image") as File) || null,
    gallery_images: formData.getAll("gallery_images").filter(Boolean) as File[],
  };

  const parsed = createArticleSchema.safeParse(row);
  if (!parsed.success) {
    return ApiResponseBuilder.error(parsed.error.message);
  }

  const body = new FormData();

  body.append("title", parsed.data.title);
  body.append("slug", parsed.data.slug);
  if (parsed.data.excerpt) body.append("excerpt", parsed.data.excerpt);
  body.append("content", parsed.data.content);

  /* body.append("is_published", String(parsed.data.is_published));
    body.append("is_featured", String(parsed.data.is_featured)); */

  if (parsed.data.cover_image) {
    body.append("cover_image", parsed.data.cover_image);
  }

  if (parsed.data.gallery_images?.length) {
    parsed.data.gallery_images.forEach((file) => {
      body.append("gallery_images[]", file);
    });
  }

  try {
    const { NEXT_PUBLIC_API_URL } = env;

    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/v1/admin/articles`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json",
        },
        body,
      },
    );

    if (!response.ok) {
      const json = await response.text().catch(() => null);
      return ApiResponseBuilder.error(
        json ?? "Algo correu mal ao tentar criar um artigo",
      );
    }

    revalidateTag("list-articles");
    return ApiResponseBuilder.success(true);
  } catch (error) {
    console.error("❌ ERROR: Falha ao criar um artigo", error);
    return ApiResponseBuilder.error("Falha ao criar um artigo");
  }
}
