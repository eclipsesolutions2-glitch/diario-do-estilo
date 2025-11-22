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
import { useState } from "react";
import { ArticleForm } from "@/app/(private)/dashboard/_components/articles/article-form";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useSearchColumnFilter } from "@/core/hooks/search-column-filter";
import type { Article } from "@/core/schemas/article";
import { columns } from "./columns";

interface TableListArticleProps {
	data: Article[];
}

export function TableListArticle({ data }: TableListArticleProps) {
	const [openDialog, setOpenDialog] = useState(false);
	const [pageQuery, setPageQuery] = useQueryState(
		"page",
		parseAsInteger.withDefault(1),
	);

	const pageIndex = pageQuery - 1;
	const setPageIndex = (index: number) => setPageQuery(index + 1);
	const pageSize = 10;

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const table = useReactTable({
		data,
		columns,
		onColumnFiltersChange: setColumnFilters,
		onPaginationChange: (updater) => {
			const nextPageIndex =
				typeof updater === "function"
					? updater({ pageIndex, pageSize }).pageIndex
					: updater.pageIndex;
			setPageIndex(Math.max(0, nextPageIndex));
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			columnFilters,
			pagination: { pageIndex, pageSize },
		},
	});

	const { search, setSearch } = useSearchColumnFilter(table, "title");

	return (
		<div className="w-full">
			<div className="flex items-center justify-between gap-4 py-4">
				<div className="flex items-center gap-4">
					<Input
						placeholder="Pesquisar artigo..."
						value={search}
						onChange={({ target }) => setSearch(target.value)}
						className="max-w-sm"
					/>
				</div>

				<Dialog open={openDialog} onOpenChange={setOpenDialog}>
					<DialogTrigger asChild>
						<Button className="text-white">
							<FilePlus2 />
							<span>Novo artigo</span>
						</Button>
					</DialogTrigger>
					<DialogContent className="md:min-w-2xl lg:min-w-3xl xl:min-w-4xl">
						<DialogHeader>
							<DialogTitle className="font-semibold tracking-tight">
								Criar Nova artigo
							</DialogTitle>
							<DialogDescription className="text-sm text-muted-foreground">
								Preencha os detalhes abaixo para adicionar uma
								nova artigo ao sistema.
							</DialogDescription>
						</DialogHeader>
						<ArticleForm
							onFinishSubmit={() => setOpenDialog(false)}
						/>
					</DialogContent>
				</Dialog>
			</div>

			<div className="rounded-md border max-md:hidden overflow-hidden">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((group) => (
							<TableRow
								key={group.id}
								className="hover:bg-transparent"
							>
								{group.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext(),
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
									data-state={
										row.getIsSelected() && "selected"
									}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
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
										<span>Nenhum artigo encontrada</span>
									</div>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

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
