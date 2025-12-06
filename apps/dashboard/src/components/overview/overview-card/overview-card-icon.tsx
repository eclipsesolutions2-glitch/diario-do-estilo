import { cn } from "@workspace/ui/lib/utils";

interface OverviewCardIconProps extends React.ComponentProps<"div"> {
  icon: React.ElementType;
}

export function OverviewCardIcon({
  icon: Icon,
  className,
  ...props
}: OverviewCardIconProps) {
  return (
    <div
      {...props}
      className={cn(
        "size-11 min-w-11 min-h-11 flex items-center justify-center rounded-xl text-neutral-600 bg-neutral-400",
        className,
      )}
    >
      <Icon />
    </div>
  );
}
