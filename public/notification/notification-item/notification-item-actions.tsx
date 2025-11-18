import type { ReactNode } from "react";

type NotificationItemActionsProps = {
	children: ReactNode;
};

export function NotificationItemActions({
	children,
}: NotificationItemActionsProps) {
	return <div className="flex gap-2 self-center">{children}</div>;
}
