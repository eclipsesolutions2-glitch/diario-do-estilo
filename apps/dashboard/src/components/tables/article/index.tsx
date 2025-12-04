"use client";

import {
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { FilePlus2, SearchX } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@workspace/ui/components/table";

import { Article } from "@/core/schemas/article";
import { ArticleForm } from "@/components/forms/article/create";
import { columns } from "./columns";

interface TableListArticleProps {
    data: Article[];
}

export function TableListArticle({ data }: TableListArticleProps) {
    const [showModal, setShowModal] = useState(false);

    const [pageQuery, setPageQuery] = useQueryState(
        "page",
        parseAsInteger.withDefault(1)
    );
    const pageIndex = pageQuery - 1;
    const pageSize = 10;

    const setPageIndex = (index: number) => {
        setPageQuery(index + 1);
    };

    const [search, setSearch] = useQueryState("search", {
        defaultValue: "",
        clearOnDefault: true,
    });

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    /* useEffect(() => {
        setColumnFilters([{ id: "name", value: search }]);
    }, [search]); */
    useEffect(() => {
        const validColumn = table.getAllColumns().find(col => col.id === "name");
        if (validColumn) {
            setColumnFilters([{ id: "name", value: search }]);
        }
    }, [search]);

    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
            pagination: { pageIndex, pageSize },
        },
        onPaginationChange: (updater) => {
            const next =
                typeof updater === "function"
                    ? updater({ pageIndex, pageSize }).pageIndex
                    : updater.pageIndex;

            setPageIndex(Math.max(0, next));
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 py-4">
                <Input
                    placeholder="Pesquisar artigo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-sm"
                />

                <Dialog open={showModal} onOpenChange={setShowModal}>
                    <DialogTrigger asChild>
                        <Button className="text-white">
                            <FilePlus2 />
                            <span>Novo artigo</span>
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="md:min-w-2xl lg:min-w-3xl xl:min-w-4xl">
                        <DialogHeader>
                            <DialogTitle className="font-semibold tracking-tight">
                                Criar novo artigo
                            </DialogTitle>
                            <DialogDescription>
                                Preencha os detalhes abaixo para adicionar um novo artigo.
                            </DialogDescription>
                        </DialogHeader>

                        <ArticleForm onFinishSubmit={() => setShowModal(false)} />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Tabela */}
            <div className="rounded-md border max-md:hidden overflow-hidden">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((group) => (
                            <TableRow key={group.id} className="hover:bg-transparent">
                                {group.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                        <SearchX size={32} />
                                        <span>Nenhum artigo encontrado</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between py-4 text-sm text-muted-foreground">
                <span>
                    {table.getFilteredSelectedRowModel().rows.length} de{" "}
                    {table.getFilteredRowModel().rows.length} artigos exibidos
                </span>

                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Anterior
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Próximo
                    </Button>
                </div>
            </div>
        </div>
    );
}
