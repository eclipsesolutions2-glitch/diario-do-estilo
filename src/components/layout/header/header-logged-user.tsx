"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/core/actions/auth";

export function HeaderLoggedUser() {
	const { user, loading } = auth.useSession();

	const getInitials = (name?: string) => {
		if (!name) return "??";
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};

	if (loading) {
		return (
			<Avatar className="size-10">
				<AvatarFallback>...</AvatarFallback>
			</Avatar>
		);
	}

	if (!user) {
		return (
			<Link href="/sign-in">
				<Button variant="ghost" size="icon">
					<User className="h-5 w-5" />
				</Button>
			</Link>
		);
	}

	const handleSignOut = async () => {
		const result = await auth.signOut();
		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="rounded-full">
					<Avatar className="h-10 w-10">
						<AvatarImage alt={user?.name} />
						<AvatarFallback>
							{getInitials(user.name)}
						</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<div className="px-2 py-1.5">
					<p className="text-sm font-medium">
						{user?.name || "Usuário"}
					</p>
					<p className="text-xs text-muted-foreground">
						{user?.email || "user@example.com"}
					</p>
				</div>
				<DropdownMenuItem asChild>
					<Link href="/profile">Perfil</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleSignOut}>
					<LogOut />
					<span>Terminar Sessão</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
