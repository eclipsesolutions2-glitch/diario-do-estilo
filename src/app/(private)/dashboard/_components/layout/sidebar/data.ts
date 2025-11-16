import { FileText, Home, LayoutGrid, UserSquare } from "lucide-react";

export const NAV_LINKS = {
	geral: [
		{
			label: "Overview",
			href: "/dashboard",
			icon: Home,
		},
		{
			label: "Artigos",
			href: "/dashboard/article",
			icon: FileText,
		},
		{
			label: "Categorias",
			href: "/dashboard/categories",
			icon: LayoutGrid,
		},
	],
	admin: [
		{
			label: "Perfil",
			href: "/dashboard/account",
			icon: UserSquare,
		},
	],
};
