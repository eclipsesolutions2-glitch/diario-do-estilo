import z from "zod";

export const updateProfileSchema = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    bio: z.string().max(125)
});

export type UpdateProfileSchemaValues = z.infer<typeof updateProfileSchema>;

export interface UserProfile {
    id: number,
    name: string,
    username: string,
    email: string,
    bio: string,
    avatar_url?: string,
    role: "editor" | "admin",
    created_at: string,
    updated_at?: string
}