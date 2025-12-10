"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoBrand } from "../logo-brand";
import { HeaderMobile } from "./header-mobile";
import { HeaderSearch } from "./header-search";
import { HeaderUser } from "./header-user";

export function Header() {
	const pathname = usePathname();
	const links = [
		{ href: "/", label: "Ínicio" },
		{ href: "/articles", label: "Artigos" },
		{ href: "/about", label: "Quem Somos" },
		{ href: "/contact", label: "Contactos" },
	];

	const isActive = (path: string) => pathname === path;
	return (
		<nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40 transition-all duration-300">
			<div className="container m-auto h-20 flex items-center justify-between">
				{/* Mobile Menu */}
				<div className="md:hidden">
					<HeaderMobile links={links} onActive={isActive} />
				</div>

				{/* Desktop Links Left */}
				<div className="hidden md:flex items-center gap-8">
					{links.slice(0, 2).map((link) => (
						<Link key={link.href} href={link.href}>
							<span
								className={`text-sm uppercase tracking-widest font-sans hover:text-primary transition-colors ${isActive(link.href) ? "text-primary font-medium" : "text-foreground"}`}
							>
								{link.label}
							</span>
						</Link>
					))}
				</div>

				{/* Logo / Seal Center */}
				<Link href="/">
					<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group">
						<LogoBrand />
					</span>
				</Link>

				{/* Desktop Links Right + Actions */}
				<div className="flex items-center gap-6">
					<div className="hidden md:flex items-center gap-8">
						{links.slice(2, 4).map((link) => (
							<Link key={link.href} href={link.href}>
								<span
									className={`text-sm uppercase tracking-widest font-sans hover:text-primary transition-colors ${isActive(link.href) ? "text-primary font-medium" : "text-foreground"}`}
								>
									{link.label}
								</span>
							</Link>
						))}
					</div>

					<div className="flex items-center gap-2 pl-4 border-l border-border/50 ml-4">
						<HeaderSearch />
						<HeaderUser />
					</div>
				</div>
			</div>
		</nav>
	);
}
