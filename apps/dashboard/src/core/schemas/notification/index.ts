export interface Notification {
	id: string;
	type: string;
	message: string;
	action_url: string;
	read_at?: string;
	created_at: string;
}

/* 
export interface Notification {
	id: string;
	type: string;
	notifiable_id: number;
	notifiable_type: string;
	data: {
		message: string;
		article_id: number;
	};
	read_at: string;
	created_at: string;
	updated_at: string;
} */
