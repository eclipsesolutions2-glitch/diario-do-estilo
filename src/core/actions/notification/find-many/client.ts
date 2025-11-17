"use client";

import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export interface Notification {
	id: string;
	type: string;
	notifiable_id: number;
	notifiable_type: string;
	data: {
		message: string;
		article_id: number;
	};
	read_at: string | null;
	created_at: string;
	updated_at: string;
}

export interface NotificationResponse {
	data: Notification[];
	current_page: number;
	per_page: number;
	total: number;
}

export function useNotification() {
	const [notifications, setNotifications] = useState<Notification[] | null>(
		null,
	);
	const [pagination, setPagination] = useState<{
		current_page: number;
		per_page: number;
		total: number;
	} | null>(null);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;

		async function loadNotifications() {
			try {
				const { "dds-auth.session-token": token } = parseCookies();
				if (!token) {
					setError("Token não encontrado.");
					setLoading(false);
					return;
				}

				const API_URL = process.env.NEXT_PUBLIC_API_URL;

				const res = await fetch(
					`${API_URL}/api/v1/auth/notifications`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
						signal,
					},
				);

				if (!res.ok) {
					throw new Error(
						`Erro ${res.status}: falha ao buscar notificações`,
					);
				}

				const json: NotificationResponse = await res.json();

				setNotifications(json.data);
				setPagination({
					current_page: json.current_page,
					per_page: json.per_page,
					total: json.total,
				});
			} catch (err) {
				if (err instanceof Error && err.name !== "AbortError") {
					console.error("Erro ao carregar notificações:", err);
					setError(err.message || "Erro desconhecido");
				}
			} finally {
				setLoading(false);
			}
		}

		loadNotifications();

		return () => controller.abort();
	}, []);

	return {
		notifications,
		pagination,
		loading,
		error,
	};
}
