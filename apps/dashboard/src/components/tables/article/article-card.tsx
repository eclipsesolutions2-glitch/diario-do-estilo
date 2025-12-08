"use client";

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@workspace/ui/components/card";
import { CheckCircle, Eye, Pencil, Star } from "lucide-react";
import Image from "next/image";
import type { Article } from "@/core/schemas/article";

interface ArticleCardProps {
	data: Article;
}

export function ArticleCard({ data }: ArticleCardProps) {
	return (
		<Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all border border-neutral-800 bg-neutral-900">
			{data.cover_image && (
				<div className="relative w-full h-44">
					<Image
						src={data.cover_image}
						alt={data.title}
						fill
						className="object-cover"
					/>
				</div>
			)}
			<CardHeader className="pb-2">
				<div className="flex items-start justify-between gap-2">
					<h2 className="text-xl font-semibold text-white">
						{data.title}
					</h2>

					<div className="flex gap-2">
						{data.is_featured && (
							<Badge
								variant="secondary"
								className="flex items-center gap-1"
							>
								<Star size={14} /> Destaque
							</Badge>
						)}

						{data.is_published ? (
							<Badge
								variant="default"
								className="flex items-center gap-1"
							>
								<CheckCircle size={14} /> Publicado
							</Badge>
						) : (
							<Badge variant="outline">Rascunho</Badge>
						)}
					</div>
				</div>

				<p className="text-sm text-neutral-400 line-clamp-2">
					{data.excerpt}
				</p>
			</CardHeader>

			<CardContent className="pt-0 space-y-2">
				<div className="flex justify-between text-xs text-neutral-500">
					<div>
						Autor:{" "}
						<span className="text-neutral-300">
							{data.author?.name}
						</span>
					</div>

					{data.published_at && (
						<div>
							{new Date(data.published_at).toLocaleDateString()}
						</div>
					)}
				</div>

				<div className="flex items-center text-sm text-neutral-400 gap-1 mt-2">
					<Eye size={16} />
					{data.view_count.toLocaleString()} visualizações
				</div>
			</CardContent>

			<CardFooter className="flex justify-between">
				<Button
					variant="secondary"
					size="sm"
					className="flex items-center gap-1"
				>
					<Eye size={16} /> Ver
				</Button>

				<Button
					variant="outline"
					size="sm"
					className="flex items-center gap-1"
				>
					<Pencil size={16} /> Editar
				</Button>
			</CardFooter>
		</Card>
	);
}
