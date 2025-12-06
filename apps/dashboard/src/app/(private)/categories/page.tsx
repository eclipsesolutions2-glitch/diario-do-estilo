import { TableListCategory } from "@/components/tables/category";
import { action } from "@/core/actions";
import type { Category } from "@/core/schemas/category";

export default async function CategoryPage() {
	const result = await action.api.category.findMany();
	const categories: Category[] = [];
	if (result.success) {
		result.data.forEach((item) => {
			categories.push(item);
		});
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

			<TableListCategory data={categories} />
		</div>
	);
}
