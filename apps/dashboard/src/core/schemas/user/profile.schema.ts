import z from "zod";

export const updateProfileSchema = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    bio: z.string().max(125)
});

export type UpdateProfileSchemaValues = z.infer<typeof updateProfileSchema>;