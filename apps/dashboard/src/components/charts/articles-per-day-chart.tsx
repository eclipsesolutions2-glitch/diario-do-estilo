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
import { CartesianGrid, Line, LineChart } from "recharts";

type ArticlesPerDayChartProps = {
	labels: string[];
	created: number[];
	read: number[];
	title?: string;
	description?: string;
};

const chartConfig = {
	created: {
		label: "Criados",
		color: "var(--chart-1)",
	},
	read: {
		label: "Lidos",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ArticlesPerDayChart({
	labels,
	created,
	read,
	title = "Artigos por dia",
	description = "Últimos 30 dias",
}: ArticlesPerDayChartProps) {
	// converter dados para formato esperado pelo Recharts
	const chartData = labels.map((label, i) => ({
		date: label,
		created: created[i],
		read: read[i],
	}));

	return (
		<Card className="shadow-none">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>

			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{ top: 24, left: 24, right: 24 }}
					>
						<CartesianGrid vertical={false} />

						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									indicator="line"
									hideLabel
								/>
							}
						/>

						<Line
							dataKey="created"
							type="monotone"
							stroke="var(--chart-1)"
							strokeWidth={2}
							dot={false}
						/>

						<Line
							dataKey="read"
							type="monotone"
							stroke="var(--chart-2)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 leading-none font-medium">
					Tendência mensal <TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground leading-none">
					Artigos criados e lidos por dia
				</div>
			</CardFooter>
		</Card>
	);
}
