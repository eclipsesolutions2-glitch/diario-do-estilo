export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { category } from "@/core/actions/category";
import type { Category } from "@/core/schemas/category";
import { TableListCategory } from "../_components/layout/tables/cotegory";

export default async function CategoriesDashboardPage() {
	const result = await category.findMany();
	const categories: Category[] = [];
	if (result.success) {
		for (let i = 0; i < result.data.length; i++) {
			categories.push(result.data[i]);
		}
	}
	return (
		<div>
			<div className="mb-8">
				<h1 className="text-4xl font-serif font-bold text-foreground mb-2">
					Categorias
				</h1>
				<p className="text-muted-foreground font-light">
					Gerencie todo o conteúdo do seu blog
				</p>
			</div>

			<Suspense fallback={<div>Carregando...</div>}>
				<TableListCategory data={categories} />
			</Suspense>
		</div>
	);
}
