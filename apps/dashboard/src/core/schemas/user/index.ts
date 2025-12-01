export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    role: UserRole;
    can_upload_avatar?: boolean;
    bio: string;
    avatar_url?: string;
}

export type UserRole = "admin" | "editor" | "reader";

export interface UserProfile extends Omit<User, "can_upload_avatar"> {
    bio: string,
    avatar_url?: string,
}