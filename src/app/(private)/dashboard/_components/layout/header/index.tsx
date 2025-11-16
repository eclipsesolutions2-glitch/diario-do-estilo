"use client";
import { Bell, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/core/actions/auth";

export function Header() {
	const session = auth.useSession();

	let ComponentView = (
		<>
			<div>
				<span className="block">--</span>
				<span className="text-xs text-muted">--</span>
			</div>
			<div className="size-10 rounded-full bg-accent-foreground" />
		</>
	);

	if (!session.error && session.user) {
		ComponentView = (
			<>
				<div className="flex flex-col">
					<span>{session.user.name}</span>
					<span className="text-xs text-muted-foreground">
						{session.user.email}
					</span>
				</div>

				<Avatar className="size-10">
					<AvatarImage
						alt={`Foto de perfil de ${session.user?.name}`}
					/>
					<AvatarFallback>
						{session.user?.name?.charAt(0).toUpperCase() ?? "?"}
					</AvatarFallback>
				</Avatar>

				<Button
					type="button"
					variant="ghost"
					size="icon"
					onClick={auth.signOut}
				>
					<LogOut className="size-5" />
				</Button>
			</>
		);
	}

	return (
		<header className="sticky top-0 left-0 z-50 w-full border-b border-dashed bg-white/70 dark:bg-background/70 backdrop-blur-sm">
			<div className="h-16 px-4 flex items-center justify-between md:justify-end">
				<div className="flex items-center gap-4">
					<Bell className="size-5" />
					<Separator orientation="vertical" className="min-h-5" />
					{ComponentView}
				</div>
			</div>
		</header>
	);
}
