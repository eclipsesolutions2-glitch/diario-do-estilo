import { Skeleton } from "@workspace/ui/components/skeleton";
import { ArticlesByCategoryChart } from "@/components/charts/articles-by-category-chart";
import { ArticlesPerDayChart } from "@/components/charts/articles-per-day-chart";
import { StatusDistributionChart } from "@/components/charts/status-distribution-chart";
import { OVERVIEW_CARD_ITEMS } from "@/components/overview/data";
import {
	OverviewCard,
	OverviewCardContent,
	OverviewCardIcon,
} from "@/components/overview/overview-card";
import { TableListRecentArticle } from "@/components/tables/article/recent-article";
import { action } from "@/core/actions";

export default async function Page() {
	const result = await action.api.overview();

	if (!result.success) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				<div className="space-y-4">
					<Skeleton className="min-h-12" />
					<Skeleton className="min-h-8" />
				</div>
				<Skeleton className="min-h-32" />
				<Skeleton className="min-h-32" />
				<Skeleton className="min-h-32" />
				<Skeleton className="min-h-32" />
			</div>
		);
	}

	const summary = result.data.summary;
	const charts = result.data.charts;

	const dynamicCards = OVERVIEW_CARD_ITEMS.map((item) => ({
		...item,
		amount: summary[item.totalsKey],
	}));

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold">Bem-vindo/a ao Dashboard</h1>
				<p>
					Gerencie seu conteúdo de moda africana e mantenha sua
					plataforma atualizada
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{dynamicCards.map((item, idx) => (
					<OverviewCard key={item.id}>
						<OverviewCardIcon
							icon={item.icon}
							className={
								idx === 0 || idx === 7
									? "text-green-600 bg-green-400/10"
									: idx === 1 || idx === 6
										? "text-blue-600 bg-blue-400/10"
										: idx === 2 || idx === 5
											? "text-amber-600 bg-amber-400/10"
											: idx === 3 || idx === 4
												? "text-lime-600 bg-lime-400/10"
												: ""
							}
						/>
						<OverviewCardContent
							title={item.title}
							value={item.amount}
							description={item.description}
						/>
					</OverviewCard>
				))}
			</div>

			<ArticlesByCategoryChart data={charts.articles_by_category} />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<ArticlesPerDayChart
					labels={charts.articles_per_day.labels}
					created={charts.articles_per_day.created}
					read={charts.articles_per_day.read}
				/>
				<StatusDistributionChart data={charts.status_distribution} />
			</div>

			<section className="space-y-4">
				<h3 className="text-xl font-bold">Artigos Recentes</h3>
				<TableListRecentArticle data={result.data.recent_articles} />
			</section>
			{/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
		</div>
	);
}
