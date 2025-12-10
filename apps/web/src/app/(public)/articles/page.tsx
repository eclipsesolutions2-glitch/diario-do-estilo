import { ArticleCard } from "@/components/layout/article-card";
import { HeroTitle } from "@/components/layout/hero-title";
import { action } from "@/core/actions";

export default async function Articles() {
	const result = await action.api.article.findMany();

	return (
		<div>
			<HeroTitle
				title="Artigos"
				description="Explora os conteúdos mais recentes"
				showLogo
				tag="Conteúdo"
			/>

			<div className="container mx-auto px-4 py-12">
				{result.success ? (
					result.data ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{result.data.data.map((item) => (
								<ArticleCard key={item.id} article={item} />
							))}
						</div>
					) : (
						<div className="text-center text-zinc-400">
							Nenhum artigo encontrado
						</div>
					)
				) : (
					<div className="flex justify-center items-center py-20">
						<div className="animate-spin h-8 w-8 rounded-full border-2 border-white border-t-transparent" />
					</div>
				)}
			</div>
		</div>
	);
}
