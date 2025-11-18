import { Skeleton } from "@/components/ui/skeleton";
import { notification } from "@/core/actions/notification";
import { NotificationToggle } from "./notification";

export async function NotificationPopover() {
	const result = await notification.findMany();

	if (!result.success) {
		return <Skeleton className="size-10 rounded-lg" />;
	}
	return <NotificationToggle data={result.data} />;
}
