"use client";
import { User } from "@/core/schemas/user";
import { env } from "@/lib/env";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

interface GetSessionResponse {
  message: string;
  user: User;
}

export function useSession() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function loadSession() {
      try {
        const { "dds-auth.session-token": token } = parseCookies();

        if (!token) {
          setError("Token não encontrado.");
          setLoading(false);
          return;
        }

        const { NEXT_PUBLIC_API_URL } = env;
        const response = await fetch(
          `${NEXT_PUBLIC_API_URL}/api/v1/auth/validate-token`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "aplication/json",
            },
            signal,
          },
        );

        if (!response.ok) {
          throw new Error(
            `Erro ${response.status}: falha na verificação do token`,
          );
        }

        const json = (await response
          .json()
          .catch(() => null)) as GetSessionResponse;

        setUser(json.user);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== "AbortError") {
            console.error("Falha ao carregar sessão:", err);
            setError(err.message || "Erro desconhecido.");
          }
        }
      } finally {
        setLoading(false);
      }
    }

    loadSession();
    return () => controller.abort();
  }, []);

  return { user, loading, error };
}
