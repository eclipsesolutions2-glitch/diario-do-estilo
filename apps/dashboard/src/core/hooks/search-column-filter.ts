"use client";

import type { Table } from "@tanstack/react-table";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";

interface UseSearchColumnFilterOptions {
    queryKey?: string;
    debounceMs?: number;
}

export function useSearchColumnFilter<T>(
    table: Table<T> | undefined,
    columnId: string,
    options: UseSearchColumnFilterOptions = {}
) {
    const {
        queryKey = "search",
        debounceMs = 300,
    } = options;

    const [search, setSearch] = useQueryState(queryKey, {
        defaultValue: "",
        clearOnDefault: true,
    });

    const [debouncedSearch] = useDebounce(search, debounceMs);

    useEffect(() => {
        const column = table?.getColumn(columnId);
        if (!column) return;


        if (column.getFilterValue() !== debouncedSearch) {
            column.setFilterValue(debouncedSearch);
        }
    }, [debouncedSearch, table, columnId]);

    useEffect(() => {
        const column = table?.getColumn(columnId);
        if (!column) return;

        const tableFilterValue = column.getFilterValue() as string;

        if (tableFilterValue !== search) {
            setSearch(tableFilterValue || "");
        }
    }, [table, columnId, search, setSearch]);

    return { search, setSearch };
}
