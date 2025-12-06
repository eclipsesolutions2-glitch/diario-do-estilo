import { Skeleton } from "@workspace/ui/components/skeleton";
import { action } from "@/core/actions";
import { NotificationToggle } from "./notification";

export async function NotificationPopover() {
  const result = await action.api.notification.findMany();

  if (!result.success) {
    return <Skeleton className="size-10 rounded-lg" />;
  }
  return <NotificationToggle data={result.data} />;
}
