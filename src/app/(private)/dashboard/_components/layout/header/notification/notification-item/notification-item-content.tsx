import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

type NotificationItemContentProps = {
	action: string;
	description: string;
	isRead: boolean;
	performedAt: string;
};

export function NotificationItemContent({
	action,
	description,
	isRead,
	performedAt,
}: NotificationItemContentProps) {
	return (
		<div
			className={`flex-1 flex flex-col gap-1.5 rounded-md p-2 transition-colors ${
				isRead
					? "hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
					: "bg-white dark:bg-neutral-900"
			}`}
		>
			<p
				className={`text-sm leading-snug ${
					!isRead
						? "font-semibold text-neutral-900 dark:text-neutral-100"
						: "text-neutral-800 dark:text-neutral-300"
				}`}
			>
				{action}
			</p>

			<p
				className={`text-sm leading-snug ${
					!isRead ? "font-medium" : ""
				} text-neutral-600 dark:text-neutral-400 line-clamp-3`}
			>
				{description}
			</p>

			<div className="text-xs flex items-center gap-1 font-medium text-neutral-400 dark:text-neutral-500">
				<span>Avaliação</span>
				<span>•</span>
				<span className="first-letter:uppercase">
					{formatDistance(new Date(performedAt), new Date(), {
						addSuffix: true,
						locale: pt,
					})}
				</span>
			</div>
		</div>
	);
}
