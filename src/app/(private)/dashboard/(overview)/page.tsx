

import {
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { article } from "@/core/actions/article";
import { category } from "@/core/actions/category";
import type { Article } from "@/core/schemas/article";
import type { Category } from "@/core/schemas/category";
import { TableListRecentArticle } from "../_components/layout/tables/recent-articles";
import {
	OverviewCard,
	OverviewCardContent,
	OverviewCardIcon,
} from "../_components/overview/overview-card";
import { ChartPieLegend } from "../_components/overview/overview-chart/piechart-legend";
import { OVERVIEW_CARD_ITEMS } from "./data";

export default async function OverviewDashboard() {
	const result = await article.findMany();
	const result2 = await category.findMany();
	const articles: Article[] = [];
	if (result.success) {
		result.data.data.forEach((art) => {
			articles.push(art);
		});
	}

	const catogories: Category[] = [];
	if (result2.success) {
		result2.data.forEach((category) => {
			catogories.push(category);
		});
	}

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold">Bem-vindo/a ao Dashboard</h1>
				<p>
					Gerencie seu conteúdo de moda africana e mantenha sua
					plataforma atualizada
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{OVERVIEW_CARD_ITEMS.map((item, idx) => (
					<OverviewCard key={item.id}>
						<OverviewCardIcon
							icon={item.icon}
							className={`${
								idx === 0
									? "text-green-600 bg-green-400/10"
									: idx === 1
										? "text-blue-600 bg-blue-400/10"
										: idx === 2
											? "text-amber-600 bg-amber-400/10"
											: idx === 3 &&
												"text-lime-600 bg-lime-400/10"
							}`}
						/>
						<OverviewCardContent
							title={item.title}
							value={String(0)}
							description={item.description}
						/>
					</OverviewCard>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<ChartPieLegend
					data={catogories.map((category) => ({
						item: category.slug,
						valor: 2,
					}))}
				/>
				{/* <ChartBarProducts /> */}
			</div>

			<CardAction className="w-full min-h-52">
				<CardContent className="p-0">
					<CardHeader className="px-0 py-2">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg font-semibold">
								Artigos Recentes
							</CardTitle>
							<span className="text-sm text-muted-foreground">
								{articles.length} artigos exibidos
							</span>
						</div>
					</CardHeader>
					<TableListRecentArticle data={articles} />
				</CardContent>
			</CardAction>
		</div>
	);
}
