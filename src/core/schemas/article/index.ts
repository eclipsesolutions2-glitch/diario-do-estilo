export interface Article {
	id: number;
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	is_published: boolean;
	is_featured: boolean;
	author: Author;
	publisher: Publisher;
	coverImage: CoverImage;
	images: Image[];
	created_at: string;
	updated_at: string;
}

export interface Author {
	id: number;
	name: string;
	email: string;
}

export interface Publisher {
	id: number;
	name: string;
	email: string;
}

export interface CoverImage {
	id: number;
	path: string;
	is_cover: boolean;
}

export interface Image {
	id: number;
	path: string;
}

export interface MetaArticle {
	current_page: number;
	last_page: number;
	per_page: number;
	total: number;
}
