"use client";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";

interface AvatarTriggerProps {
	data: {
		name: string;
		image?: string;
	};
	size?: "default" | "smoll" | "medium" | "long";
}

export const AvatarTrigger = ({
	data,
	size = "default",
}: AvatarTriggerProps) => {
	return (
		<Avatar
			className={cn(
				"h-10 w-10",
				size === "smoll"
					? "h-8 w-8"
					: size === "medium"
						? "h-14 w-14"
						: size === "long" && "h-24 w-24 md:h-32 md:w-32",
			)}
		>
			<AvatarImage src={data.image ?? "/"} alt="@utilizador" />
			<AvatarFallback
				className={cn(
					"bg-neutral-100 dark:bg-neutral-800",
					size === "medium"
						? "text-lg"
						: size === "long" && "text-5xl",
				)}
			>
				{data.name?.substring(0, 2).toUpperCase()}
			</AvatarFallback>
		</Avatar>
	);
};
