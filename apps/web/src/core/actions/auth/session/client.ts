"use client";

import { useEffect, useState } from "react";
import type { User } from "@/core/schemas/user";
import { getSession } from "./server";

export function useSession() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function loadSession() {
			try {
				const result = await getSession();
				if (!result.success) {
					setUser(null);
					return;
				}

				setUser(result.data ?? null);
			} catch (err) {
				if (err instanceof Error && err.name !== "AbortError") {
					console.error("Falha ao carregar sessão:", err);
					setError(err.message || "Erro desconhecido.");
				}
			} finally {
				setLoading(false);
			}
		}

		loadSession();
	}, []);

	return { user, loading, error };
}
