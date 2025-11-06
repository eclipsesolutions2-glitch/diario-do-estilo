"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeaderLoggedUser } from "./header-logged-user";
import { HeaderSearch } from "./header-search";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const categories = [
		{ name: "Moda Africana", slug: "african-fashion" },
		{ name: "Tendências", slug: "tendencies" },
		{ name: "Cultura", slug: "culture" },
		{ name: "Crítica Social", slug: "social-criticism" },
		/*{ name: "Estilo de Vida", slug: "estilo-de-vida" },
		{ name: "Beleza", slug: "beleza" },*/
	];
	return (
		<header className="border-b border-border bg-background sticky top-0 z-50">
			<div className="border-b border-border py-2 px-4 md:px-6">
				<div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
					<div className="text-muted-foreground">
						Moda Global • Cultura Local
					</div>
					<div className="flex items-center gap-4">
						<Button
							size="icon-sm"
							variant="ghost"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							PT
						</Button>
						<Button
							size="icon-sm"
							variant="ghost"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							EN
						</Button>
					</div>
				</div>
			</div>

			<div className="px-4 md:px-6 py-4">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className="h-5 w-5" />
					</Button>

					<Link href="/">
						<h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight cursor-pointer">
							<span className="text-primary">Diário</span>{" "}
							<span className="text-foreground">Do Estilo</span>
						</h1>
					</Link>

					<div className="flex items-center gap-2">
						<HeaderSearch />
						<HeaderLoggedUser />
					</div>
				</div>
			</div>

			<nav className="border-t border-border">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<ul className="hidden md:flex items-center justify-center gap-8 py-4 text-sm font-medium">
						{categories.map((category) => (
							<li key={category.slug}>
								<Link
									href={`/${category.slug}`}
									className={cn(
										"text-foreground hover:text-primary transition-colors uppercase tracking-wide",
										pathname.includes(category.slug) &&
											"text-primary",
									)}
								>
									{category.name}
								</Link>
							</li>
						))}
					</ul>

					{isMenuOpen && (
						<ul className="md:hidden py-4 space-y-3">
							{categories.map((category) => (
								<li key={category.slug}>
									<Link
										href={`/${category.slug}`}
										className="block text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm font-medium"
										onClick={() => setIsMenuOpen(false)}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</nav>
		</header>
	);
}
