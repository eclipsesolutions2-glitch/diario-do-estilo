import { z } from "zod";

export const subscribeNewsLatterSchema = z.object({
	email: z.string().email({ message: "Informe um email válido" }),
	name: z.string().min(3, { message: "Deve ter no minimo 3 caractes" }),
});

export type SubscribeNewsLatterSchemaValues = z.infer<
	typeof subscribeNewsLatterSchema
>;
