"use server";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface InactiveUserActionParams {
  userId: string;
}

interface InactiveUserActionResponse {
  message: string;
}

export async function inactiveUserAction({
  userId,
}: InactiveUserActionParams): Promise<ApiResponse<InactiveUserActionResponse>> {
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
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      },
    );

    const json = (await response
      .json()
      .catch(() => null)) as InactiveUserActionResponse;
    if (!response.ok) {
      const msg =
        json.message ??
        "Algo correu mal ao tentar desativar a conta de" + userId;
      return ApiResponseBuilder.error(msg);
    }

    revalidateTag("list-users");
    return ApiResponseBuilder.success(json);
  } catch (error) {
    const errorMessage = "Falha ao  desativar a conta. ";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
