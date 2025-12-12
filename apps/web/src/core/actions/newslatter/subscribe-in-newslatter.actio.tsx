"use server";
import {
	type ApiResponse,
	ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import {
	type SubscribeNewsLetterSchemaValues,
	subscribeNewsLetterSchema,
} from "@/core/schemas/newsletter.schama";
import { env } from "@/lib/env";

export async function subscribeNewsLetterAction(
	data: SubscribeNewsLetterSchemaValues,
): Promise<ApiResponse<boolean>> {
	const parsed = subscribeNewsLetterSchema.safeParse(data);
	if (!parsed.success) {
		return ApiResponseBuilder.error(parsed.error.message);
	}
	try {
		const { NEXT_PUBLIC_API_URL } = env;

		const response = await fetch(
			`${NEXT_PUBLIC_API_URL}/api/v1/newsletter/subscribe`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: parsed.data.name,
					email: parsed.data.email,
				}),
			},
		);

		if (!response.ok) {
			const json = await response.text().catch(() => null);
			return ApiResponseBuilder.error(
				json ??
					"Algo correu mal ao tentar sobrescrever-se na newsletter",
			);
		}
		return ApiResponseBuilder.success(
			true,
			"Sobrescrição na newsletter bem sucedida",
		);
	} catch (error) {
		console.error(
			"❌ ERROR: Falha ao sobrescrever-se na newsletter",
			error,
		);
		return ApiResponseBuilder.error(
			"Falha ao sobrescrever-se na newsletter",
		);
	}
}
