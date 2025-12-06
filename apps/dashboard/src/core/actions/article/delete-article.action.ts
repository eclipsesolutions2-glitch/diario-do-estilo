"use server";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface DeleteArticleActionParams {
  slug: string;
}

export async function deleteArticleAction({
  slug,
}: DeleteArticleActionParams): Promise<ApiResponse<{ message: string }>> {
  const storage = await cookies();
  const token = storage.get("dds-auth.session-token");
  if (!token) {
    return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
  }

  if (!slug) {
    return ApiResponseBuilder.error("Dados inválidos");
  }

  try {
    const { NEXT_PUBLIC_API_URL } = env;
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/v1/admin/articles/${slug}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      },
    );
    const json = await response.json().catch(() => null);
    if (!response.ok) {
      const msg = "Algo correu mal ao tentar apagar um artigo";
      return ApiResponseBuilder.error(msg);
    }
    revalidateTag("list-articles");
    return ApiResponseBuilder.success(json);
  } catch (error) {
    const errorMessage = "Falha ao apagar um artigo";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
