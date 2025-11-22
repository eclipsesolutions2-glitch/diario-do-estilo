"use client";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { useFindManyCategories } from "@/core/actions/category/find-many/client";
import type { Category } from "@/core/schemas/category";
import { normalizeText } from "@/lib/formats/normalize-text";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface CategoryCommandContentProps {
	slugValue: string;
	searchValue: string;
}

export function CategoryCommandContent({
	searchValue,
}: CategoryCommandContentProps) {
	const { data: categories, panding } = useFindManyCategories();
	return (
		<div>
			{panding ? (
				<div className="min-h-32 flex flex-col items-center justify-center">
					<Spinner />
					<span className="text-sm text-muted-foreground dark:text-muted">
						A carregar...
					</span>
				</div>
			) : (
				categories
					.filter((c) =>
						normalizeText(c.name)
							.toLowerCase()
							.includes(normalizeText(searchValue).toLowerCase()),
					)
					.map((category) => (
						<CategoryCommandItem
							key={category.id}
							data={category}
						/>
					))
			)}
		</div>
	);
}

interface CategoryCommandItemProps {
	data: Category;
}

function CategoryCommandItem({ data }: CategoryCommandItemProps) {
	const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
	return (
		<DropdownMenuCheckboxItem
			checked={showActivityBar}
			onCheckedChange={setShowActivityBar}
		>
			{data.name}
		</DropdownMenuCheckboxItem>
	);
}
