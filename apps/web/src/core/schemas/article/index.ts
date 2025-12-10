export interface Article {
	id: number;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	author?: Author;
	published_by?: PublishedBy;
	is_published: boolean;
	is_featured: boolean;
	published_at?: string;
	created_at: string;
	updated_at: string;
	view_count: number;
	cover_image?: string;
	gallery: string[];
	categories: string[];
}

interface Author {
	id: number;
	name: string;
}

interface PublishedBy {
	id: number;
	name: string;
}
