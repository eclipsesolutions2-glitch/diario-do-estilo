"use client";

import { Cell, Pie, PieChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";

interface PieData {
	item: string;
	valor: number;
}

interface ChartPieLegendProps {
	data: PieData[];
	title?: string;
	subtitle?: string;
}

export function ChartPieLegend({
	data = [],
	title = "Gráfico de Pizza",
	subtitle,
}: ChartPieLegendProps) {
	const palette = [
		"var(--chart-1)",
		"var(--chart-2)",
		"var(--chart-3)",
		"var(--chart-4)",
		"var(--chart-5)",
		"var(--chart-6)",
		"var(--chart-7)",
		"var(--chart-8)",
	];

	const itemColors: Record<string, { label: string; color: string }> =
		data.reduce(
			(acc, { item }, index) => {
				acc[item] = {
					label: item[0].toUpperCase() + item.slice(1),
					color: palette[index % palette.length],
				};
				return acc;
			},
			{} as Record<string, { label: string; color: string }>,
		);

	const chartConfig = {
		valor: { label: "Quantidade" },
		...itemColors,
	} satisfies ChartConfig;

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>{title}</CardTitle>
				{subtitle && (
					<CardDescription className="sr-only">
						{subtitle}
					</CardDescription>
				)}
			</CardHeader>

			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<PieChart>
						<Pie
							data={data}
							dataKey="valor"
							nameKey="item"
							cx="50%"
							cy="50%"
							outerRadius={90}
						>
							{data.map((d) => (
								<Cell
									key={d.item}
									fill={itemColors[d.item].color}
								/>
							))}
						</Pie>
						<ChartLegend
							content={<ChartLegendContent nameKey="item" />}
							className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
