"use client";

import { Ban, Bell, Keyboard, ShoppingBag, Star, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Notification } from "@/core/schemas/notificaiton.chema";
import { NotificationEmptyState } from "./notification-empty-state";
import {
	NotificationItem,
	NotificationItemContent,
	NotificationItemIcon,
} from "./notification-item";

interface NotificationToggleProps {
	notifications: Notification[] | null;
	onMarkAllAsRead?: () => void;
}

export const NotificationToggle = ({
	notifications,
	onMarkAllAsRead,
}: NotificationToggleProps) => {
	const isRead = true; // notifications?.find((notification) => notification.isRead);
	function getActionColor(action: string): string {
		switch (action) {
			case "PRODUCT":
				return "text-green-600 dark:text-green-400";
			case "PAYMENT_METHOD":
				return "text-blue-600 dark:text-blue-400";
			case "CASH_REGISTER":
				return "text-orange-600 dark:text-orange-400";
			case "ORDER":
				return "text-purple-600 dark:text-purple-400";
			default:
				return "text-neutral-600 dark:text-neutral-400";
		}
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="h-9 w-9 relative"
					aria-label="Abrir notificações"
				>
					<Bell className="h-4 w-4" />
					<span className="sr-only">Notificações</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="end"
				className="w-[450px] max-w-[450px] space-y-2 p-0"
			>
				<div className="py-4 px-6 flex items-center justify-between">
					<span className="font-bold tracking-wide">
						Notificações
					</span>
					<button
						type="button"
						disabled={!!isRead}
						onClick={onMarkAllAsRead}
						className="text-xs font-bold text-neutral-600 hover:text-green-600 disabled:text-neutral-400 disabled:cursor-not-allowed"
					>
						MARCAR TODAS COMO VISTAS
					</button>
				</div>
				<div>
					<div className="px-5 py-2 text-sm text-neutral-400 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
						Recentes
					</div>
					<ScrollArea className="max-h-[385px] overflow-y-auto">
						{notifications ? (
							notifications.length > 0 ? (
								<div className="flex flex-col gap-1 divide-y-2 divide-neutral-200 dark:divide-neutral-800">
									{notifications.map((notify) => (
										<div>{notify}</div>
									))}
								</div>
							) : (
								<NotificationEmptyState />
							)
						) : (
							<div className="min-h-60 p-4 text-center select-none text-neutral-500 dark:text-neutral-700 flex flex-col items-center justify-center">
								<Ban className="w-10 h-10 mb-2" />
								<span>Falha na conecção com o servidor</span>
							</div>
						)}
					</ScrollArea>
				</div>
			</PopoverContent>
		</Popover>
	);
};

/* <NotificationItem key={notify.id}>
											<NotificationItemIcon
												icon={
													notify.action === "PRODUCT"
														? ShoppingBag
														: notify.action ===
																"PAYMENT_METHOD"
															? Wallets
															: notify.action ===
																	"CASH_REGISTER"
																? Keyboard
																: Star
												}
												isRead={notify.isRead ?? false}
												className={getActionColor(
													notify.action,
												)}
											/>
											<NotificationItemContent
												action={notify.action}
												description={
													notify.description ?? ""
												}
												isRead={notify.isRead ?? false}
												performedAt={notify.performedAt}
											/>
										</NotificationItem> */
