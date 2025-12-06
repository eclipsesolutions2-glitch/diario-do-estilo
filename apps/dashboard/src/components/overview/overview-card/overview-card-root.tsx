import { Card, CardContent } from "@workspace/ui/components/card";
import type React from "react";

interface OverviewCardRootProps {
	children: React.ReactNode;
}

export function OverviewCardRoot({ children }: OverviewCardRootProps) {
	return (
		<Card className="p-4 shadow-none">
			<CardContent className="flex gap-4 justify-between p-0">
				{children}
			</CardContent>
		</Card>
	);
}
