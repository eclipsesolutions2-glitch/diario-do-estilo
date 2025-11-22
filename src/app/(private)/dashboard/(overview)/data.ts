import { FileCheck2, FileText, LayoutGrid, Users2 } from "lucide-react";

export const OVERVIEW_CARD_ITEMS = [
	{
		id: "1",
		icon: FileText,
		title: "Total de Artigos",
		description: "Número total de artigos cadastrados na plataforma.",
	},
	{
		id: "2",
		icon: LayoutGrid,
		title: "Categorias",
		description:
			"Quantidade de categorias disponíveis para organizar os artigos.",
	},
	{
		id: "3",
		icon: Users2,
		title: "Usuários",
		description: "Total de usuários cadastrados na plataforma.",
	},
	{
		id: "4",
		icon: FileCheck2,
		title: "Artigos Publicados",
		description:
			"Número de artigos que já foram publicados e estão visíveis.",
	},
];
