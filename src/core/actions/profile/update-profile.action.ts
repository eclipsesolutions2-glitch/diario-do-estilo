"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import {
	type ApiResponse,
	ResponseMapper,
} from "@/core/schemas/default.mappers";
import {
	type ProfileInfoValues,
	profileInfoSchema,
} from "@/core/schemas/profile.schema";
import { env } from "@/lib/env";

export async function updateProfileAction(
	data: ProfileInfoValues,
): Promise<ApiResponse<boolean>> {
	const storage = await cookies();
	const token = storage.get("dds-auth.session-token")?.value;

	if (!token) {
		return ResponseMapper.error("Sessão expirada. Faça login novamente.");
	}

	const parsed = profileInfoSchema.safeParse(data);

	if (!parsed.success) {
		return ResponseMapper.error(parsed.error.issues[0].message);
	}

	try {
		const { NEXT_PUBLIC_API_URL: API_URL } = env;

		const response = await fetch(
			`${API_URL}/api/v1/auth/profile
`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					name: parsed.data.name,
					username: parsed.data.username,
					email: parsed.data.email,
					bio: parsed.data.bio,
				}),
			},
		);

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			throw new Error(
				errorData?.message || "Falha ao atualizar detalhes do perfil",
			);
		}

		revalidateTag("profile-details", "max");

		return ResponseMapper.success(
			true,
			"Detalhes do perfil atualizada com sucesso",
		);
	} catch (error) {
		console.error("Erro ao atualizar detalhes do perfil:", error);
		return ResponseMapper.error(
			error instanceof Error
				? error.message
				: "Erro ao atualizar detalhes do perfil. Tente novamente.",
		);
	}
}
