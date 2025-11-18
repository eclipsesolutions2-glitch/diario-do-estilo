import { Inbox } from "lucide-react";

export function NotificationEmptyState() {
	return (
		<div className="min-h-60 p-4 text-center select-none text-neutral-500 dark:text-neutral-700 flex flex-col items-center justify-center">
			<Inbox className="w-10 h-10 mb-2" />
			<span>Você não possui notificações</span>
		</div>
	);
}
