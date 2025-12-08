"use client";
import {
	type ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	useReactTable,
} from "@tanstack/react-table";
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
import { Plus, SearchX } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useState } from "react";
import { CreateCategoryForm } from "@/components/forms/category/create-category-form";
import { useSearchColumnFilter } from "@/core/hooks/search-column-filter";
import type { Category } from "@/core/schemas/category";
import { CategoryCard } from "./category-card";
import { columns } from "./columns";

interface TableListCategoryProps {
	data: Category[];
}

export function TableListCategory({ data }: TableListCategoryProps) {
	const [showModal, setShowModal] = useState(false);
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

	const { search, setSearch } = useSearchColumnFilter(table, "name");

	return (
		<div className="w-full">
			<div className="flex items-center justify-between gap-4 py-4">
				<div className="flex items-center gap-4">
					<Input
						placeholder="Pesquisar categoria..."
						value={search}
						onChange={({ target }) => setSearch(target.value)}
						className="max-w-sm"
					/>
				</div>

				<Dialog open={showModal} onOpenChange={setShowModal}>
					<DialogTrigger asChild>
						<Button className="text-white">
							<Plus />
							<span>Nova categoria</span>
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="font-semibold tracking-tight">
								Criar Nova Categoria
							</DialogTitle>
							<DialogDescription className="text-sm text-muted-foreground">
								Preencha os detalhes abaixo para adicionar uma
								nova categoria ao sistema.
							</DialogDescription>
						</DialogHeader>
						<CreateCategoryForm
							onFinishSubmit={() => setShowModal(false)}
						/>
					</DialogContent>
				</Dialog>
			</div>

			<div className="rounded-md border overflow-hidden">
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
										<span>
											Nenhuma categoria encontrada
										</span>
									</div>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<div className="grid sm:grid-cols-2 gap-4 items-stretch md:hidden">
				{table.getRowModel().rows.length ? (
					table
						.getRowModel()
						.rows.map((row) => (
							<CategoryCard key={row.id} data={row.original} />
						))
				) : (
					<div className="flex flex-col sm:col-span-2 min-h-80 justify-center select-none items-center gap-2 text-muted-foreground">
						<SearchX size={32} />
						<span className="text-center">
							Nenhuma categoria encontrada
						</span>
					</div>
				)}
			</div>

			<div className="flex items-center justify-between py-4 text-sm text-muted-foreground">
				<span>
					{table.getFilteredSelectedRowModel().rows.length} de{" "}
					{table.getFilteredRowModel().rows.length} categorias
					exibidos
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
