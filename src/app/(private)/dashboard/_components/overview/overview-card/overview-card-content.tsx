import { Info } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface OverviewCardContentProps {
	title: string;
	description: string;
	value: string;
}

export function OverviewCardContent({
	title,
	description,
	value,
}: OverviewCardContentProps) {
	return (
		<div>
			<div className="flex items-center gap-2">
				<span className="text-nowrap">{title}</span>
				<Tooltip>
					<TooltipTrigger asChild>
						<Info className="w-4 h-4" />
					</TooltipTrigger>
					<TooltipContent>
						<p>{description}</p>
					</TooltipContent>
				</Tooltip>
			</div>
			<span className="block text-2xl text-end font-semibold">
				{value}
			</span>
		</div>
	);
}
