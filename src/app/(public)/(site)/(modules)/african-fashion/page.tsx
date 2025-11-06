import ArticleCard from "@/components/layout/home/article-card";
import { Button } from "@/components/ui/button";

const articles = [
	{
		id: 1,
		title: "A Revolução da Moda Africana Contemporânea",
		category: "Moda Africana",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
		excerpt:
			"Designers africanos estão redefinindo os padrões da indústria fashion global.",
		author: "Maria Silva",
		date: "15 Jan 2025",
		slug: "revolucao-moda-africana",
	},
	{
		id: 2,
		title: "Tecidos Tradicionais em Alta",
		category: "Moda Africana",
		image: "/colorful-african-ankara-fabric-patterns-on-fashion.jpg",
		excerpt: "Ankara e Kente conquistam passarelas internacionais.",
		author: "João Santos",
		date: "14 Jan 2025",
		slug: "tecidos-tradicionais",
	},
	{
		id: 3,
		title: "Sustentabilidade na Moda Africana",
		category: "Moda Africana",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
		excerpt: "Como designers africanos lideram o movimento sustentável.",
		author: "Ana Costa",
		date: "13 Jan 2025",
		slug: "sustentabilidade-moda",
	},
	{
		id: 4,
		title: "Lagos Fashion Week 2025",
		category: "Moda Africana",
		image: "/colorful-african-ankara-fabric-patterns-on-fashion.jpg",
		excerpt: "Os destaques da semana de moda mais importante da África.",
		author: "Pedro Lima",
		date: "12 Jan 2025",
		slug: "lagos-fashion-week",
	},
	{
		id: 5,
		title: "Joias Africanas Contemporâneas",
		category: "Moda Africana",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
		excerpt: "A arte ancestral encontra o design moderno.",
		author: "Carla Mendes",
		date: "11 Jan 2025",
		slug: "joias-africanas",
	},
	{
		id: 6,
		title: "Cores e Padrões da África",
		category: "Moda Africana",
		image: "/colorful-african-ankara-fabric-patterns-on-fashion.jpg",
		excerpt: "Entenda o significado por trás das estampas tradicionais.",
		author: "Lucas Ferreira",
		date: "10 Jan 2025",
		slug: "cores-padroes-africa",
	},
];

export default function AfricanFashionPage() {
	return (
		<div>
			<header className="mb-16 text-center">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
					Moda Africana
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
					Explore a riqueza e diversidade da moda africana
					contemporânea, onde tradição encontra inovação.
				</p>
			</header>

			{/* Filter/Sort Bar */}
			<div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b">
				<p className="text-sm text-muted-foreground">
					{articles.length} artigos encontrados
				</p>
				<div className="flex gap-2">
					<select className="px-4 py-2 border rounded-lg text-sm bg-background">
						<option>Mais Recentes</option>
						<option>Mais Populares</option>
						<option>Mais Antigos</option>
					</select>
				</div>
			</div>

			{/* Articles Grid */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>

			{/* Pagination */}
			<div className="flex justify-center gap-2">
				<Button className="px-4 py-2 border rounded-lg hover:bg-secondary transition-colors">
					Anterior
				</Button>
				<Button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
					1
				</Button>
				<Button className="px-4 py-2 border rounded-lg hover:bg-secondary transition-colors">
					2
				</Button>
				<Button className="px-4 py-2 border rounded-lg hover:bg-secondary transition-colors">
					3
				</Button>
				<Button className="px-4 py-2 border rounded-lg hover:bg-secondary transition-colors">
					Próximo
				</Button>
			</div>
		</div>
	);
}
