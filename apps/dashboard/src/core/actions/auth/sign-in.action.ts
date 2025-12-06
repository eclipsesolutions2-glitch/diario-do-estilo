"use server";
import {
  signInSchema,
  SignInSchemaValues,
} from "@/core/schemas/auth/sign-in.schema";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import {
  ApiResponse,
  ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import { cookies } from "next/headers";

interface SignInResponse {
  message: string;
  user: User;
  token: string;
}

export async function signInAction(
  data: SignInSchemaValues,
): Promise<ApiResponse<SignInResponse>> {
  const parsed = signInSchema.safeParse(data);
  if (!parsed.success) {
    return ApiResponseBuilder.error(parsed.error.message);
  }
  try {
    const { NEXT_PUBLIC_API_URL } = env;
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: parsed.data.email,
        password: parsed.data.password,
      }),
    });

    const json = (await response.json().catch(() => null)) as SignInResponse;

    if (!response.ok) {
      const msg = "Email ou senha inválidos";
      return ApiResponseBuilder.error(msg);
    }

    const storage = await cookies();
    storage.set("dds-auth.session-token", json.token, {
      maxAge: 60 * 60 * 24 * 1, // 1 dia
      path: "/",
    });

    return ApiResponseBuilder.success(json);
  } catch (error) {
    const errorMessage = "Erro inesperado no login";
    console.error(`❌ ERROR: ${errorMessage}`, error);
    return ApiResponseBuilder.error(errorMessage);
  }
}
