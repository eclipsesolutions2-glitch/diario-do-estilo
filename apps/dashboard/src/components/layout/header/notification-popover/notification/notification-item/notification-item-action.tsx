import type { ElementType } from "react";
import { cn } from "@workspace/ui/lib/utils";

type NotificationItemActionProps = React.HTMLAttributes<HTMLButtonElement> & {
  icon: ElementType;
};

export function NotificationItemAction({
  icon: Icon,
  className,
  ...rest
}: NotificationItemActionProps) {
  return (
    <button
      {...rest}
      className={cn(
        "group w-8 h-8 rounded flex items-center justify-center bg-neutral-300 hover:bg-neutral-400",
        className,
      )}
    >
      <Icon className="w-3 h-3 text-neutral-600 group-hover:text-neutral-100" />
    </button>
  );
}
