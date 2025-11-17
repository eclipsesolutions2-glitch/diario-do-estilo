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
/* data: [
    {
			id: "123e4567-e89b-12d3-a456-426614174000";
			type: "App\\\\Notifications\\\\ArticlePublished";
			notifiable_id: 1;
			notifiable_type: "App\\\\Models\\\\User";
			data: {
				message: "Seu artigo foi publicado!";
				article_id: 1;
			};
			read_at: "2025-11-05T12:00:00Z";
			created_at: "2025-11-05T12:00:00Z";
			updated_at: "2025-11-05T12:00:00Z";
		},
];
current_page: 1;
per_page: 15;
total: 50;
 */
