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
}

export interface NotificationResponse {
	data: Notification[];
	current_page: number;
	per_page: number;
	total: number;
}
