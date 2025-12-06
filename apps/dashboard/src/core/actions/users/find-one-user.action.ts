"use server";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface FindOneUserActionParams {
  userId: string;
}

interface FindOneUserActionResponse {
  data: User;
  is_active: boolean;
}

export async function findOneUserAction({
  userId,
}: FindOneUserActionParams): Promise<ApiResponse<FindOneUserActionResponse>> {
  const storage = await cookies();
  const token = storage.get("dds-auth.session-token");
  if (!token) {
    return ApiResponseBuilder.error("Precisa estar autenticado.");
  }

  if (!userId) {
    return ApiResponseBuilder.error("Identificador do usuário não enviado");
  }

  try {
    const { NEXT_PUBLIC_API_URL } = env;
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/v1/auth/users/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      },
    );
    const json = (await response
      .json()
      .catch(() => null)) as FindOneUserActionResponse;
    if (!response.ok) {
      const msg = "Algo correu mal ao tentar buscar os dados de" + userId;
      return ApiResponseBuilder.error(msg);
    }

    return ApiResponseBuilder.success(json);
  } catch (error) {
    const errorMessage = "Falha ao buscar os dados. ";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
