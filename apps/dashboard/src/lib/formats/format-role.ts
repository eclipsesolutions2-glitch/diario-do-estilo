import type { UserRole } from "@/core/schemas/user";

export function formatRole(role: UserRole): string {
	switch (role) {
		case "admin":
			return "Administrador";
		case "editor":
			return "Editor";
		case "reader":
			return "Leitor";
		default:
			return "Desconhecido";
	}
}
