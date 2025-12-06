"use server";
import {
  updateCategorySchema,
  UpdateCategorySchemaValues,
} from "@/core/schemas/category/update-category.schema";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function updateCategoryAction(
  data: UpdateCategorySchemaValues & { slug: string },
): Promise<ApiResponse<boolean>> {
  const storage = await cookies();
  const token = storage.get("dds-auth.session-token");
  if (!token) {
    return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
  }

  if (!data.slug) {
    return ApiResponseBuilder.error("Dados inválidos");
  }

  const parsed = updateCategorySchema.safeParse(data);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Dados inválidos.";
    return ApiResponseBuilder.error(firstIssue);
  }

  try {
    const { NEXT_PUBLIC_API_URL } = env;
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/v1/admin/categories/${data.slug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify({
          name: parsed.data.name,
          description: parsed.data.description,
        }),
      },
    );
    const json = await response.json().catch(() => null);

    if (!response.ok) {
      const msg = "Algo correu mal ao tentar actualizar categoria";
      return ApiResponseBuilder.error(msg);
    }

    revalidateTag("list-categories");
    return ApiResponseBuilder.success(json);
  } catch (error) {
    const errorMessage = "Falha ao actualizar categoria";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
