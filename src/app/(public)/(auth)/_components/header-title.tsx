"use client";

import { usePathname } from "next/navigation";

export function HeaderTitle() {
	const pathname = usePathname();

	const routersValids = [
		{
			href: "/sign-in",
			title: "Bem-vindo de Volta",
			description: "Entre para acessar conteúdo exclusivo",
		},
		{
			href: "/register",
			title: "Crie sua Conta",
			description: "Junte-se à nossa comunidade de moda",
		},
		{
			href: "/forgot",
			title: "Recuperar Senha",
			description: "Redefina sua senha para continuar",
		},
	];

	const currentRoute = routersValids.find((r) => r.href === pathname);

	const title = currentRoute?.title ?? "Página";
	const description =
		currentRoute?.description ?? "Aproveite nossos recursos";

	return (
		<div className="text-center mb-8">
			<h1 className="text-4xl font-serif mb-3">{title}</h1>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}
