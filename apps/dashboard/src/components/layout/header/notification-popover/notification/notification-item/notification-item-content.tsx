import { Button } from "@workspace/ui/components/button";
import { formatDate } from "@workspace/ui/lib/formats/format-date";
import { ExternalLink } from "lucide-react";
import type { Notification } from "@/core/schemas/notification";

type NotificationItemContentProps = {
	data: Notification;
	onMarkAsRead?: (id: string) => void;
	onOpenAction?: (url: string) => void;
};

export function NotificationItemContent({
	data,
	onOpenAction,
	onMarkAsRead,
}: NotificationItemContentProps) {
	return (
		<div className="flex-1 min-w-0">
			<div className="flex items-start justify-between gap-3">
				<p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
					{data.message}
				</p>

				<div className="flex items-center gap-2">
					<time className="text-xs text-neutral-500 dark:text-neutral-400">
						{formatDate(data.created_at)}
					</time>
				</div>
			</div>

			<div className="mt-2 flex items-center gap-2">
				{data.action_url && (
					<Button
						onClick={() => {
							if (onOpenAction) onOpenAction(data.action_url);
						}}
						className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full border text-neutral-700 hover:bg-neutral-100"
						aria-label={`Abrir ação para notificação ${data.id}`}
					>
						Abrir
						<ExternalLink className="w-4 h-4" />
					</Button>
				)}
			</div>
		</div>
	);
}
