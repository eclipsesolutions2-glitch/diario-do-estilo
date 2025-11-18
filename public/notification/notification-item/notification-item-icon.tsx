import type { ElementType } from "react";
import { cn } from "@/lib/utils";

type NotificationItemIconProps = {
	icon: ElementType;
	isRead: boolean;
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export function NotificationItemIcon({
	icon: Icon,
	isRead,
	className,
}: NotificationItemIconProps) {
	return (
		<Icon
			strokeWidth={!isRead ? 2 : 1.5}
			className={cn(
				"w-6 h-6 text-sacalinha-first mt-2.5 relative",
				className,
			)}
		/>
	);
}
