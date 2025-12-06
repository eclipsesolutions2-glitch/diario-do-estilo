"use client";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { formatInitials } from "@workspace/ui/lib/formats/format-initials";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export function HeaderUser() {
	const user = null;
	return (
		<div>
			{user ? (
				<HeaderUserDropdown
					data={{
						name: "",
						email: "",
						image: "",
					}}
				/>
			) : (
				<Link href="/sign-in">
					<Button variant="ghost" size="icon">
						<User className="h-5 w-5" />
					</Button>
				</Link>
			)}
		</div>
	);
}

interface HeaderUserDropdownProps {
	data: {
		name: string;
		image?: string;
		email: string;
	};
}

function HeaderUserDropdown({ data: user }: HeaderUserDropdownProps) {
	const handleSignOut = async () => {};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="rounded-full">
					<Avatar className="h-10 w-10">
						<AvatarImage src={user.image} alt={user.name} />
						<AvatarFallback>
							{formatInitials(user.name)}
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
