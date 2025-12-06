"use client";

import { SidebarMenuButton } from "@workspace/ui/components/sidebar";
import { Switch } from "@workspace/ui/components/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === "dark";
	const text = isDark ? "Modo Escuro" : "Modo Claro";

	return (
		<SidebarMenuButton
			tooltip={text}
			className="flex items-center gap-2"
			onClick={() => setTheme(isDark ? "light" : "dark")}
		>
			{isDark ? <Sun className="text-yellow-500" /> : <Moon />}

			<span className="flex-1 truncate group-data-[collapsed=true]:hidden">
				{text}
			</span>

			<Switch
				checked={isDark}
				className="pointer-events-none data-[state=checked]:bg-primary shrink-0"
			/>
		</SidebarMenuButton>
	);
};
