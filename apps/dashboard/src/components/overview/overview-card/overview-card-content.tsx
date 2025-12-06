import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { Info } from "lucide-react";

interface OverviewCardContentProps {
  title: string;
  description: string;
  value: number;
}

export function OverviewCardContent({
  title,
  description,
  value,
}: OverviewCardContentProps) {
  return (
    <div className="flex flex-col gap-1 sm:gap-2 w-full">
      {/* Título + Tooltip */}
      <div className="flex items-center justify-between w-full">
        <span
          className="text-sm sm:text-base font-medium text-foreground truncate max-w-[calc(100%-1.5rem)]"
          title={title} // tooltip nativo se cortar
        >
          {title}
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="p-0 m-0 bg-transparent border-none cursor-pointer"
            >
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          </TooltipTrigger>

          <TooltipContent side="top">
            <p className="text-sm sm:text-base">{description}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Valor */}
      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-end text-foreground truncate">
        {value.toLocaleString()}
      </span>
    </div>
  );
}
