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
