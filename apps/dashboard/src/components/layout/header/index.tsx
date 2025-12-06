import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";
import { DynamicBreadcrumb } from "./dynamic-breadcrumb";
import { GoToSite } from "./go-to-site";
import { NotificationPopover } from "./notification-popover";

export function Header() {
	return (
		<header className="sticky top-0 left-0 z-50 w-full h-16 shrink-0 flex items-center justify-between px-4 border-b bg-background/70 backdrop-blur-sm transition-[width,height] ease-linear group-data-[collapsed=true]/sidebar-wrapper:h-12">
			<div className="flex items-center gap-3">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="data-[orientation=vertical]:h-4"
				/>
				<DynamicBreadcrumb />
			</div>

			<div className="flex items-center gap-3">
				<NotificationPopover />
				<GoToSite />
			</div>
		</header>
	);
}
