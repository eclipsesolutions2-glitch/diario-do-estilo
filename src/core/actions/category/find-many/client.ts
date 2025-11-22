"use client";
import { useEffect, useState } from "react";
import type { Category } from "@/core/schemas/category";
import { category } from "..";

export function useFindManyCategories() {
	const [categories, setCategories] = useState<Category[]>([]);
	const [panding, setPending] = useState(false);

	useEffect(() => {
		setPending(true);
		category
			.findMany()
			.then((result) => {
				if (result.success) {
					setCategories(result.data);
				}
			})
			.finally(() => {
				setPending(false);
			});
	}, []);

	return { data: categories, panding };
}
