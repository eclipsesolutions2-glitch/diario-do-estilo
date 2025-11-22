import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/core/actions/auth";
import { formatInitials } from "@/lib/formats/format-initials";

export async function HeaderUser() {
	const session = await auth.getSession();

	if (!session.success) {
		return (
			<>
				<div className="space-y-2">
					<Skeleton className="h-3 w-full max-w-32" />
					<Skeleton className="h-3 w-full min-w-52" />
				</div>
				<Skeleton className="size-10 rounded-full" />
			</>
		);
	}
	const user = session.data;
	const initials = formatInitials(session.data.name);
	return (
		<>
			<div className="flex flex-col">
				<span>{user.name}</span>
				<span className="text-xs text-muted-foreground">
					{user.email}
				</span>
			</div>

			<Link href="/dashboard/account">
				<Avatar className="size-10">
					<AvatarImage alt={`Foto de ${user.name}`} src={""} />
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>
			</Link>
		</>
	);
}
