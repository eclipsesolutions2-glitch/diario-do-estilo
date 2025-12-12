"use client";
import { Button } from "@workspace/ui/components/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@workspace/ui/components/popover";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { Ban, Bell, Home, Inbox, Star } from "lucide-react";
import { toast } from "sonner";
import { action } from "@/core/actions";
import type { Notification } from "@/core/schemas/notification";
import {
	NotificationItem,
	NotificationItemContent,
	NotificationItemIcon,
} from "./notification-item";

interface NotificationToggleProps {
	data: Notification[];
	onMarkAllAsRead?: () => void;
}

export function NotificationToggle({
	data: notifications,
	onMarkAllAsRead,
}: NotificationToggleProps) {
	const isRead = notifications.filter((n) => n.read_at).length > 0;
	function openAction(url: string) {
		window.location.href = url;
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
						className="text-xs font-bold text-neutral-600 hover:text-primary disabled:text-neutral-400 disabled:cursor-not-allowed"
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
									{notifications.map((notification) => (
										<NotificationItem key={notification.id}>
											<NotificationItemIcon
												icon={
													notification ? Star : Home
												}
												isRead={!!notification.read_at}
											/>
											<NotificationItemContent
												data={notification}
												onOpenAction={openAction}
												onMarkAsRead={(n) => {
													action.api.notification
														.markOneRead({
															notificationId: +n,
														})
														.catch(() => {
															toast.error(
																"Falha ao marcar como lida",
															);
														});
												}}
											/>
										</NotificationItem>
									))}
								</div>
							) : (
								<div className="min-h-60 p-4 text-center select-none text-neutral-500 dark:text-neutral-700 flex flex-col items-center justify-center">
									<Inbox className="w-10 h-10 mb-2" />
									<span>Você não possui notificações</span>
								</div>
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
}
