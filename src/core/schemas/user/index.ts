export interface User {
	id: string;
	name: string;
	username: string;
	email: string;
}

export interface UserProfile {
	id: 1;
	name: string;
	username: string;
	email: string;
	bio: string;
	avatar_url?: string;
	role: "editor" | "admin";
	created_at: string;
	updated_at?: string;
}
