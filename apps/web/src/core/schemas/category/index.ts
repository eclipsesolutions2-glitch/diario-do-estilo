import type { User } from "../user/index.js";

export interface Category {
	id: number;
	name: string;
	slug: string;
	description: string;
	created_by: User;
	created_at: string;
	updated_at: string;
}
