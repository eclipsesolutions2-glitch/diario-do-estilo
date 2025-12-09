import { Button } from "@workspace/ui/components/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { LogoBrand } from "../logo-brand";

export function HeaderMobile({
	links,
	onActive,
}: {
	links: { label: string; href: string }[];
	onActive: (path: string) => boolean;
}) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="text-foreground">
					<Menu className="h-6 w-6" />
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="w-[300px] bg-background border-r border-border"
			>
				<div className="flex flex-col gap-8 mt-10 px-4">
					<LogoBrand />
					<div className="flex flex-col gap-4">
						{links.map((link) => (
							<Link key={link.href} href={link.href}>
								<span
									className={`text-2xl font-serif ${onActive(link.href) ? "text-primary italic" : "text-foreground"}`}
								>
									{link.label}
								</span>
							</Link>
						))}
						<hr className="border-border my-4" />
						<Link href="/editor">
							<span className="text-lg font-sans text-muted-foreground hover:text-foreground">
								Área do Editor
							</span>
						</Link>
						<Link href="/admin">
							<span className="text-lg font-sans text-muted-foreground hover:text-foreground">
								Admin
							</span>
						</Link>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
