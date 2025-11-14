import { DirectboxNotif, Home2, UserSquare } from "iconsax-reactjs";

export const NAV_LINKS = {
	geral: [
		{
			label: "Overview",
			href: "/dashboard",
			icon: Home2,
		},
		{
			label: "Artigos",
			href: "/dashboard/article",
			icon: DirectboxNotif,
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
