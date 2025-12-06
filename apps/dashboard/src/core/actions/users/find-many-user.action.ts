"use server";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface FindManyUserActionParams {
  search?: string;
  status?: "all" | "active" | "trashed";
}

interface FindManyUserActionResponse {
  search: string;
  status: string;
  total: number;
  users: User[];
}

export async function findManyUserAction(
  params?: FindManyUserActionParams,
): Promise<ApiResponse<FindManyUserActionResponse>> {
  let status: FindManyUserActionParams["status"] = "all";
  if (params?.status) {
    status = params.status;
  }

  const storage = await cookies();
  const token = storage.get("dds-auth.session-token");
  if (!token) {
    return ApiResponseBuilder.error("Precisa estar autenticado.");
  }
  try {
    const { NEXT_PUBLIC_API_URL } = env;
    const query = new URLSearchParams();

    if (params?.search) {
      query.set("search", params.search);
    }

    query.set("status", status);

    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/v1/auth/users?${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        next: {
          tags: ["list-users"],
        },
      },
    );
    const json = (await response
      .json()
      .catch(() => null)) as FindManyUserActionResponse;
    if (!response.ok) {
      const msg = "Algo correu mal ao tentar buscar os dados";
      return ApiResponseBuilder.error(msg);
    }

    return ApiResponseBuilder.success(json);
  } catch (error) {
    const errorMessage = "Falha ao buscar os dados. ";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
