"use client";

import { Button } from "@workspace/ui/components/button";
import { Filter } from "lucide-react";
import { useQueryState } from "nuqs";
import { useMemo, useState } from "react";

import { ArticleCard } from "@/components/layout/article-card";
import type { Article } from "@/core/schemas/article";
import { ArticleSearch } from "./article-search";

type SortOption = "recent" | "oldest" | "title-asc" | "title-desc";

interface Props {
	articles: Article[];
}

export function ArticleToolbar({ articles }: Props) {
	const [query] = useQueryState("q");
	const [sort, setSort] = useState<SortOption>("recent");
	const [onlyFeatured, setOnlyFeatured] = useState(false);

	const filtered = useMemo(() => {
		let list = [...articles];

		if (onlyFeatured) {
			list = list.filter((a) => a.is_featured);
		}

		if (query) {
			const q = query.toLowerCase();
			list = list.filter(
				(article) =>
					article.title.toLowerCase().includes(q) ||
					article.excerpt?.toLowerCase().includes(q),
			);
		}

		switch (sort) {
			case "recent":
				list.sort(
					(a, b) =>
						new Date(b.created_at).getTime() -
						new Date(a.created_at).getTime(),
				);
				break;

			case "oldest":
				list.sort(
					(a, b) =>
						new Date(a.created_at).getTime() -
						new Date(b.created_at).getTime(),
				);
				break;

			case "title-asc":
				list.sort((a, b) => a.title.localeCompare(b.title));
				break;

			case "title-desc":
				list.sort((a, b) => b.title.localeCompare(a.title));
				break;
		}

		return list;
	}, [articles, sort, onlyFeatured, query]);

	return (
		<>
			<div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-16 border-b border-border pb-8">
				<div className="flex gap-2">
					<ArticleSearch />
				</div>

				<div className="flex gap-2 flex-wrap">
					<Button
						variant={onlyFeatured ? "default" : "outline"}
						className="rounded-none h-12 px-6 font-sans uppercase tracking-wider text-xs"
						onClick={() => setOnlyFeatured((v) => !v)}
					>
						<Filter className="w-4 h-4 mr-2" />
						Destaques
					</Button>

					<Button
						variant={sort === "recent" ? "default" : "outline"}
						onClick={() => setSort("recent")}
						className="rounded-none h-12 px-6 text-xs uppercase tracking-wider"
					>
						Recentes
					</Button>

					<Button
						variant={sort === "oldest" ? "default" : "outline"}
						onClick={() => setSort("oldest")}
						className="rounded-none h-12 px-6 text-xs uppercase tracking-wider"
					>
						Antigos
					</Button>

					<Button
						variant={sort === "title-asc" ? "default" : "outline"}
						onClick={() => setSort("title-asc")}
						className="rounded-none h-12 px-6 text-xs uppercase tracking-wider"
					>
						A–Z
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{filtered.length > 0 ? (
					filtered.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))
				) : (
					<p className="text-sm text-muted-foreground col-span-full text-center">
						Nenhum artigo encontrado
					</p>
				)}
			</div>
		</>
	);
}
