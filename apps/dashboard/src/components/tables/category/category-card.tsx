"use client";

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@workspace/ui/components/card";
import { Calendar, Pencil, Tag, User } from "lucide-react";
import type { Category } from "@/core/schemas/category";

interface CategoryCardProps {
	data: Category;
}

export function CategoryCard({ data }: CategoryCardProps) {
	return (
		<Card className="rounded-2xl shadow-sm hover:shadow-md transition-all border border-neutral-800 bg-neutral-900 p-0">
			<CardHeader>
				<div className="flex items-start justify-between">
					<h2 className="text-xl font-semibold text-white flex items-center gap-2">
						<Tag size={18} className="text-neutral-400" />
						{data.name}
					</h2>

					<Badge variant="secondary" className="text-xs">
						{data.slug}
					</Badge>
				</div>

				<p className="text-sm text-neutral-400 mt-1 line-clamp-2">
					{data.description || "Sem descrição"}
				</p>
			</CardHeader>

			<CardContent className="text-sm text-neutral-400 space-y-2">
				<div className="flex items-center gap-2">
					<User size={16} className="text-neutral-500" />
					Criada por:
					<span className="text-neutral-200">
						{data.created_by?.name}
					</span>
				</div>

				<div className="flex items-center gap-2">
					<Calendar size={16} className="text-neutral-500" />
					Criada em:
					<span className="text-neutral-200">
						{new Date(data.created_at).toLocaleDateString()}
					</span>
				</div>

				<div className="flex items-center gap-2">
					<Calendar size={16} className="text-neutral-500" />
					Atualizada em:
					<span className="text-neutral-200">
						{new Date(data.updated_at).toLocaleDateString()}
					</span>
				</div>
			</CardContent>

			<CardFooter className="flex justify-end">
				<Button
					size="sm"
					variant="outline"
					className="flex items-center gap-1"
				>
					<Pencil size={16} />
					Editar
				</Button>
			</CardFooter>
		</Card>
	);
}
