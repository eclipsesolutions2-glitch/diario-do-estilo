import {
	type ApiResponse,
	ApiResponseBuilder,
} from "@workspace/ui/lib/mappers/api-response-builder.mapper";
import {
	type SubscribeNewsLatterSchemaValues,
	subscribeNewsLatterSchema,
} from "@/core/schemas/newslatter.schama";
import { env } from "@/lib/env";

export async function subscribeNewsLatterAction(
	data: SubscribeNewsLatterSchemaValues,
): Promise<ApiResponse<any>> {
	const parsed = subscribeNewsLatterSchema.safeParse(data);
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
				json ?? "Algo correu mal ao tentar criar um artigo",
			);
		}
		return ApiResponseBuilder.success({});
	} catch (error) {
		console.error("❌ ERROR: Falha ao criar um artigo", error);
		return ApiResponseBuilder.error("Falha ao criar um artigo");
	}
}
