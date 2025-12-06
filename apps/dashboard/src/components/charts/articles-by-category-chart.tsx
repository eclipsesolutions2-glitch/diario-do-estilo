"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@workspace/ui/components/chart";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

type CategoryData = {
	label: string;
	value: number;
};

type ArticlesByCategoryChartProps = {
	data: CategoryData[];
	title?: string;
	description?: string;
};

const chartConfig = {
	value: {
		label: "Artigos",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig;

export function ArticlesByCategoryChart({
	data,
	title = "Artigos por categoria",
	description = "Distribuição total",
}: ArticlesByCategoryChartProps) {
	const chartData = data.map((item) => ({
		category: item.label,
		value: item.value,
	}));

	return (
		<Card className="shadow-none">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>

			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="max-h-52 w-full"
				>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 8)}
						/>

						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>

						<Bar dataKey="value" fill="var(--chart-1)" radius={8} />
					</BarChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 leading-none font-medium">
					Crescimento mensal <TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground leading-none">
					Artigos agrupados por categoria
				</div>
			</CardFooter>
		</Card>
	);
}
