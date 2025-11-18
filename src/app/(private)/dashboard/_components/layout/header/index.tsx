import { Separator } from "@/components/ui/separator";
import { HeaderUser } from "./header-user";
import { HeaderUserLogout } from "./header-user-logout";
import { NotificationPopover } from "./notification-popover";

export function Header() {
	return (
		<header className="sticky top-0 left-0 z-50 w-full border-b border-dashed bg-white/70 dark:bg-background/70 backdrop-blur-sm">
			<div className="h-16 px-4 flex items-center justify-between md:justify-end bg-brand-900">
				<div className="flex items-center gap-4">
					<NotificationPopover />
					<Separator orientation="vertical" className="min-h-5" />
					<HeaderUser />
					<HeaderUserLogout />
				</div>
			</div>
		</header>
	);
}
