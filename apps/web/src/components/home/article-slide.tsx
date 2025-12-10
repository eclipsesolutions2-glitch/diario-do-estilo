"use client";
import { Button } from "@workspace/ui/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Article } from "@/core/schemas/article";

interface ArticleSliderProps {
	articles: Article[];
}

export function ArticleSlider({ articles }: ArticleSliderProps) {
	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent((prev) => (prev + 1) % articles.length);
	};

	const prev = () => {
		setCurrent((prev) => (prev - 1 + articles.length) % articles.length);
	};

	const goToSlide = (index: number) => {
		setCurrent(index);
	};

	const formatDate = (dateString?: string) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	};

	if (articles.length === 0) {
		return (
			<div className="w-full">
				<div className="bg-neutral-100 rounded-lg p-8 text-center text-neutral-500">
					Nenhum artigo disponível
				</div>
			</div>
		);
	}

	const article = articles[current];

	return (
		<div className="relative w-full">
			<div className="relative overflow-hidden">
				<Link
					href={`/articles/${article?.slug}`}
					className="group block h-full"
				>
					<article className="relative h-full w-full overflow-hidden min-h-[500px] flex items-end p-8 md:p-12">
						<div className="absolute inset-0">
							<Image
								src={
									article?.cover_image ||
									"/images/placeholder.svg"
								}
								alt={`${article?.title}`}
								fill
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
						</div>

						<div className="relative z-10 w-full max-w-3xl px-12">
							<span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-white uppercase bg-primary">
								{article?.categories[0] || "Artigo"}
							</span>
							<h2 className="font-serif text-4xl md:text-6xl text-white mb-4 leading-tight group-hover:underline decoration-1 underline-offset-8 decoration-primary/50">
								{article?.title}
							</h2>
							<p className="font-sans text-white/80 text-lg mb-6 line-clamp-2 max-w-xl">
								{article?.excerpt}
							</p>
							<div className="flex items-center gap-4 text-white/60 text-sm font-sans uppercase tracking-wider">
								<span>
									{article?.author?.name ||
										"Autor Desconhecido"}
								</span>
								<span className="w-1 h-1 rounded-full bg-primary" />
								<span>{formatDate(article?.published_at)}</span>
							</div>
						</div>
					</article>
				</Link>

				{/* Botões de Navegação */}
				{articles.length > 1 && (
					<>
						<Button
							onClick={prev}
							className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all"
							aria-label="Artigo anterior"
						>
							<ChevronLeft size={28} />
						</Button>
						<Button
							onClick={next}
							className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all"
							aria-label="Próximo artigo"
						>
							<ChevronRight size={28} />
						</Button>
					</>
				)}

				{/* Indicadores */}
				{articles.length > 1 && (
					<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
						{articles.map((_, idx) => (
							<Button
								key={`${idx + 2} -`}
								onClick={() => goToSlide(idx)}
								className={`h-1 p-1 rounded-full transition-all ${
									idx === current
										? "w-12 bg-white"
										: "w-8 bg-white/40 hover:bg-white/60"
								}`}
								aria-label={`Ir para artigo ${idx + 1}`}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
