import { z } from "zod";

export const subscribeNewsLetterSchema = z.object({
	email: z.string().email({ message: "Informe um email válido" }),
	name: z.string().min(3, { message: "Deve ter no minimo 3 caractes" }),
});

export type SubscribeNewsLetterSchemaValues = z.infer<
	typeof subscribeNewsLetterSchema
>;
