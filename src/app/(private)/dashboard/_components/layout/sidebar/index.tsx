"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./data";

export function Sidebar() {
	const pathname = usePathname();
	return (
		<aside className="w-64 hidden md:flex flex-col border-r border-dashed">
			<div className="h-16 flex items-center gap-2 mb-5 px-2">
				<Link href="/dashboard">
					<h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight cursor-pointer">
						<span className="text-primary">Diário</span>{" "}
						<span className="text-foreground">Do Estilo</span>
					</h1>
				</Link>
			</div>
			<nav className="flex-1 space-y-4 px-2">
				{Object.entries(NAV_LINKS).map(([key, value]) => (
					<div key={key}>
						<span className="block font-semibold first-letter:uppercase mb-2">
							{key}
						</span>
						{value.map((link) => (
							<Link
								href={link.href}
								key={link.label}
								className={cn(
									"flex items-center gap-2 px-4 py-2 rounded-md text-gray-600 hover:text-gray-500",
									pathname === link.href &&
										"text-white hover:text-white bg-primary",
								)}
							>
								<link.icon className="w-5" />
								<span>{link.label}</span>
							</Link>
						))}
					</div>
				))}
			</nav>
			<Separator />
		</aside>
	);
}
