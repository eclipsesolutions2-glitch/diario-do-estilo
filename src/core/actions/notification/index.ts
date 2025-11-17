import { useNotification } from "./find-many/client";
import { findManyNotificationAction } from "./find-many/server";
import { findManyUnReadNotificationAction } from "./find-many-unread-notification.action";
import { markAllReadNotificationAction } from "./mark-all-read-notification.action";
import { markReadNotificationAction } from "./mark-read-notification.action";

export const notification = {
	findMany: findManyNotificationAction,
	useNotification,
	findManyUnRead: findManyUnReadNotificationAction,
	markRead: markReadNotificationAction,
	markAllRead: markAllReadNotificationAction,
};
