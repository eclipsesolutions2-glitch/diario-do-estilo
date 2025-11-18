"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/core/actions/auth";

export function HeaderUserLogout() {
	return (
		<Button
			type="button"
			variant="ghost"
			size="icon"
			onClick={auth.signOut}
		>
			<LogOut className="size-5" />
		</Button>
	);
}
