"use server";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

export async function signOutAction(): Promise<ApiResponse<boolean>> {
  const storage = await cookies();
  const token = storage.get("dds-auth.session-token");

  if (!token) {
    return ApiResponseBuilder.error("Precisa estar autenticado.");
  }

  try {
    const { NEXT_PUBLIC_API_URL } = env;
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (!response.ok) {
      const msg = "Falha ao terminar a sessão";
      return ApiResponseBuilder.error(msg);
    }

    storage.delete("dds-auth.session-token");
    return ApiResponseBuilder.success(true);
  } catch (error) {
    const errorMessage = "Erro inesperado no logout";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
