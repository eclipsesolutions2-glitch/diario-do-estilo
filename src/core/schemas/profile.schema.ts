import z from "zod";

export const profileInfoSchema = z.object({
	name: z
		.string()
		.min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),
	email: z.string().email({ message: "Informe um e-mail válido." }),
	username: z.string().min(3, {
		message: "O nome de usuário deve ter no mínimo 3 caracteres.",
	}),
	bio: z
		.string()
		.min(3, { message: "A bio deve ter no mínimo 3 caracteres." })
		.max(125, { message: "A bio deve ter no máximo 125 caracteres." }),
});

export type ProfileInfoValues = z.infer<typeof profileInfoSchema>;
