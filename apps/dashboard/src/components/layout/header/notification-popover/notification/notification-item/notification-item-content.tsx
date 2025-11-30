import type { Notification } from "@/core/schemas/notification";


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