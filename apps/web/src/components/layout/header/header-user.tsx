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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { action } from "@/core/actions";

export function HeaderUser() {
	const { user } = action.api.auth.useSession();
	return (
		<div>
			{user ? (
				<HeaderUserDropdown
					data={{
						name: user.name,
						email: user.email,
						image: user.avatar_url,
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
	const router = useRouter();
	const handleSignOut = async () => {
		const result = await action.api.auth.signOut();
		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		router.push("/");
		router.refresh();
	};
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
			<DropdownMenuContent align="end" className="w-56 mt-6 rounded-none">
				<div className="px-4 pt-4 pb-2">
					<p className="text-sm font-medium">
						{user?.name || "Usuário"}
					</p>
					<p className="text-xs text-muted-foreground">
						{user?.email || "user@example.com"}
					</p>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild className="rounded-none">
					<Link href="/profile" className="px-4 py-2">
						Perfil
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={handleSignOut}
					className="rounded-none px-4 py-2"
				>
					<LogOut />
					<span>Terminar Sessão</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
