import type { ReactNode } from "react";

type NotificationItemRootProps = {
    children: ReactNode;
};

export function NotificationItemRoot({ children }: NotificationItemRootProps) {
    return (
        <div className="px-8 py-4 flex items-start gap-6 bg-white dark:bg-neutral-900">
            {children}
        </div>
    );
}