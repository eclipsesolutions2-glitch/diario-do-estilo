export interface Category {
	id: number;
	name: string;
	slug: string;
	description: string;
	created_by: CreatedBy;
	created_at: string;
	updated_at: string;
}

export interface CreatedBy {
	id: number;
	name: string;
	username: string;
	email: string;
	role: string;
	bio: string;
	avatar_url?: string;
	can_upload_avatar: boolean;
}
