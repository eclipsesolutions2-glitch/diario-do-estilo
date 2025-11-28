export interface User {
    id: number
    name: string
    email: string
    username: string
    role: UserRole
    created_at: string
    updated_at: string
    deleted_at?: string
}

export type UserRole = "admin" | "editor" | "reader";

export interface UserProfile extends Omit<User, "deleted_at"> {
    bio: string,
    avatar_url?: string,
}