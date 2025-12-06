"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart";

type StatusDistribution = {
  published: number;
  draft: number;
  trashed: number;
};

type StatusDistributionChartProps = {
  data: StatusDistribution;
  title?: string;
  description?: string;
};

const chartConfig = {
  published: { label: "Publicado", color: "var(--chart-1)" },
  draft: { label: "Rascunho", color: "var(--chart-2)" },
  trashed: { label: "Excluído", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function StatusDistributionChart({
  data,
  title = "Distribuição de status",
  description = "Artigos por status",
}: StatusDistributionChartProps) {
  const chartData = [
    { name: "Publicado", value: data.published, fill: "var(--chart-1)" },
    { name: "Rascunho", value: data.draft, fill: "var(--chart-2)" },
    { name: "Excluído", value: data.trashed, fill: "var(--chart-3)" },
  ];

  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.value, 0),
    [chartData],
  );

  return (
    <Card className="flex flex-col shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Artigos
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Crescimento mensal <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total de artigos por status
        </div>
      </CardFooter>
    </Card>
  );
}
