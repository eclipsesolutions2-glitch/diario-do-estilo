"use client";
import { Input } from "@workspace/ui/components/input";
import { Search } from "lucide-react";
import { useQueryState } from "nuqs";

export function ArticleSearch() {
	const [, setSearchParams] = useQueryState("q", {
		defaultValue: "",
	});
	return (
		<div className="relative w-full md:w-96">
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
			<Input
				placeholder="Buscar artigos..."
				className="pl-10 font-sans border-border rounded-none focus-visible:ring-primary h-12"
				onChange={({ target }) => setSearchParams(target.value)}
			/>
		</div>
	);
}
