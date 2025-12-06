"use server";
import {
  createCategorySchema,
  CreateCategorySchemaValues,
} from "@/core/schemas/category/create-category.schema";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function createCategoryAction(
  data: CreateCategorySchemaValues,
): Promise<ApiResponse<boolean>> {
  const storage = await cookies();
  const token = storage.get("dds-auth.session-token");
  if (!token) {
    return ApiResponseBuilder.error("Sessão expirada. Faça login novamente.");
  }

  const parsed = createCategorySchema.safeParse(data);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Dados inválidos.";
    return ApiResponseBuilder.error(firstIssue);
  }

  try {
    const { NEXT_PUBLIC_API_URL } = env;
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/v1/admin/categories`,
      {
        method: "POST",
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
      const msg = "Algo correu mal ao tentar criar categoria";
      return ApiResponseBuilder.error(msg);
    }

    revalidateTag("list-categories");
    return ApiResponseBuilder.success(json);
  } catch (error) {
    const errorMessage = "Falha ao criar categoria";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
