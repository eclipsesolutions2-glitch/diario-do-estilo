"use client";
import { LayoutDashboard } from "lucide-react";
import { useState } from "react";
import {
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { useSearchQuery } from "@/core/hooks/search-query-filter";
import {
	CategoryCommand,
	CategoryCommandContent,
	CategoryCommandSearch,
} from "./category-command";

interface CategoryMoreActionProps {
	slug: string;
}

export function CategoryMoreAction({ slug }: CategoryMoreActionProps) {
	const { value: search, setValue: setSearch } = useSearchQuery("q");
	return (
		<div>
			<DropdownMenuSub>
				<DropdownMenuSubTrigger onSelect={(e) => e.preventDefault()}>
					<LayoutDashboard className="h-4 w-4" />
					<span>Cateroria</span>
				</DropdownMenuSubTrigger>
				<DropdownMenuPortal>
					<DropdownMenuSubContent>
						<CategoryCommand>
							<CategoryCommandSearch
								defaultValue={search}
								onChangeValue={setSearch}
							/>
							<CategoryCommandContent
								slugValue={slug}
								searchValue={search}
							/>
						</CategoryCommand>
					</DropdownMenuSubContent>
				</DropdownMenuPortal>
			</DropdownMenuSub>
		</div>
	);
}
