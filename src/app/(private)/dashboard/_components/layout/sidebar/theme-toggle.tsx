"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<div className="flex items-center gap-1.5 px-4 py-2">
			{isDark ? (
				<Sun className="w-5 h-5" />
			) : (
				<Moon className="w-5 h-5" />
			)}
			<span className="flex-1">
				{isDark ? "Modo Escuro" : "Modo Claro"}
			</span>
			<Switch
				checked={isDark}
				className="data-[state=checked]:bg-[#008700]"
				onCheckedChange={(checked) =>
					setTheme(checked ? "dark" : "light")
				}
			/>
		</div>
	);
};
