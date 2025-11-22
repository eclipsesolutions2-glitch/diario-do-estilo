"use client";

import { useQueryState } from "nuqs";
import { useDebounce } from "use-debounce";

export function useSearchQuery(
	queryKey = "search",
	debounceMs = 300,
	defaultValue = "",
) {
	const [value, setValue] = useQueryState(queryKey, {
		defaultValue,
		clearOnDefault: true,
	});

	const [debouncedValue] = useDebounce(value, debounceMs);

	return {
		value,
		setValue,
		debouncedValue,
	};
}
