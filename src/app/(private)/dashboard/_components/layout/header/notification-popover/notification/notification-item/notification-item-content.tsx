import type { Notification } from "@/core/schemas/notificaiton.chema";

type NotificationItemContentProps = {
	data: Notification;
};

export function NotificationItemContent({
	data,
}: NotificationItemContentProps) {
	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
