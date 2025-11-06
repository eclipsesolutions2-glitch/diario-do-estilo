import Link from "next/link";
import ArticleCard from "./article-card";

const articles = [
	{
		id: 1,
		category: "Tendências",
		title: "Tecidos Tradicionais Africanos Dominam as Passarelas Europeias",
		excerpt:
			"O Ankara e o Kente ganham destaque nas coleções de alta costura, celebrando a herança cultural africana.",
		image: "/images/colorful-african-ankara-fabric-patterns-on-fashion.jpg",
		author: "Maria Santos",
		date: "15 de Outubro, 2025",
	},
	{
		id: 2,
		category: "Cultura",
		title: "A Influência da Arte Africana no Design Contemporâneo",
		excerpt:
			"Como a estética africana está moldando o futuro do design de moda e acessórios.",
		image: "/images/african-art-inspired-contemporary-fashion-accessor.jpg",
		author: "João Ferreira",
		date: "12 de Outubro, 2025",
	},
	{
		id: 3,
		category: "Crítica Social",
		title: "Moda Sustentável: Lições dos Artesãos Africanos",
		excerpt:
			"A sabedoria ancestral africana oferece soluções para a crise de sustentabilidade na moda.",
		image: "/images/african-artisan-creating-sustainable-fashion-handm.jpg",
		author: "Ana Costa",
		date: "10 de Outubro, 2025",
	},
	{
		id: 4,
		category: "Moda Africana",
		title: "Designers Emergentes da África Ocidental",
		excerpt:
			"Conheça os novos talentos que estão revolucionando a indústria da moda com perspectivas frescas.",
		image: "/images/young-african-fashion-designer-working-in-modern-s.jpg",
		author: "Pedro Alves",
		date: "8 de Outubro, 2025",
	},
	{
		id: 5,
		category: "Beleza",
		title: "Beleza Natural: O Movimento de Aceitação Capilar",
		excerpt:
			"Celebrando a textura natural e a diversidade dos cabelos afro na indústria da beleza.",
		image: "/images/beautiful-african-woman-with-natural-afro-hair-bea.jpg",
		author: "Carla Mendes",
		date: "5 de Outubro, 2025",
	},
	{
		id: 6,
		category: "Estilo de Vida",
		title: "Street Style: As Ruas de Lagos Como Passarela",
		excerpt:
			"O estilo urbano nigeriano que está inspirando fashionistas ao redor do mundo.",
		image: "/images/stylish-african-street-fashion-in-lagos-nigeria-ur.jpg",
		author: "Ricardo Silva",
		date: "3 de Outubro, 2025",
	},
];

export default function ArticleGrid() {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
			<div className="flex items-center justify-between mb-12">
				<h2 className="font-serif text-3xl md:text-4xl font-bold">
					Últimas Histórias
				</h2>
				<Link
					href="#"
					className="text-primary hover:text-[#0A5F62] font-medium text-sm uppercase tracking-wider transition-colors"
				>
					Ver Todas
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</section>
	);
}
