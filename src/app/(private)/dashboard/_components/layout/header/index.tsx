"use client";

import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/core/actions/auth";
import { notification } from "@/core/actions/notification";
import { NotificationToggle } from "./notification";

export function Header() {
	const { user, error: sessionError } = auth.useSession();
	const { notifications, error: notifError } = notification.useNotification();

	return (
		<header className="sticky top-0 left-0 z-50 w-full border-b border-dashed bg-white/70 dark:bg-background/70 backdrop-blur-sm">
			<div className="h-16 px-4 flex items-center justify-between md:justify-end">
				<div className="flex items-center gap-4">
					{!notifError && notifications ? (
						<NotificationToggle notifications={[]} />
					) : (
						<div>-</div>
					)}

					<Separator orientation="vertical" className="min-h-5" />
					{!sessionError && user ? (
						<UserView data={user} />
					) : (
						<EmptyUserView />
					)}
				</div>
			</div>
		</header>
	);
}

const EmptyUserView = () => {
	return (
		<>
			<div>
				<span className="block">--</span>
				<span className="text-xs text-muted">--</span>
			</div>
			<div className="size-10 rounded-full bg-accent-foreground" />
		</>
	);
};

interface UserViewProps {
	data: {
		name: string;
		email: string;
	};
}

const UserView = ({ data: user }: UserViewProps) => {
	return (
		<>
			<div className="flex flex-col">
				<span>{user.name}</span>
				<span className="text-xs text-muted-foreground">
					{user.email}
				</span>
			</div>

			<Avatar className="size-10">
				<AvatarImage alt={`Foto de ${user.name}`} src={""} />
				<AvatarFallback>
					{user.name?.charAt(0).toUpperCase() ?? "?"}
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
};

/* const { user, error: sessionError } = auth.useSession();
	const { notifications, loading: notifLoading } =
		notification.useNotification();

	
	const EmptyUserView = (
		<>
			<div>
				<span className="block">--</span>
				<span className="text-xs text-muted">--</span>
			</div>
			<div className="size-10 rounded-full bg-accent-foreground" />
		</>
	);

	
	const UserView =
		!sessionError && user ? (
			<>
				<div className="flex flex-col">
					<span>{user.name}</span>
					<span className="text-xs text-muted-foreground">
						{user.email}
					</span>
				</div>

				<Avatar className="size-10">
					<AvatarImage alt={`Foto de ${user.name}`} src={""} />
					<AvatarFallback>
						{user.name?.charAt(0).toUpperCase() ?? "?"}
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
		) : (
			EmptyUserView
		);

	
	const list: Notification[] = notifications ?? [];

	return (
		<header className="sticky top-0 left-0 z-50 w-full border-b border-dashed bg-white/70 dark:bg-background/70 backdrop-blur-sm">
			<div className="h-16 px-4 flex items-center justify-between md:justify-end">
				<div className="flex items-center gap-4">
					
					{!notifLoading && list.length > 0 && (
						<NotificationToggle notifications={list} />
					)}

					<Separator orientation="vertical" className="min-h-5" />

					{UserView}
				</div>
			</div>
		</header>
	); */
