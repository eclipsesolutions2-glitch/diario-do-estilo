import Image from "next/image";
import Link from "next/link";

const featuredTrends = [
	{
		id: 1,
		title: "Minimalismo Africano Conquista o Mundo",
		image: "/images/elegant-african-fashion-model-in-contemporary-desi.jpg",
		excerpt:
			"Menos é mais: como a estética africana redefine o conceito de elegância.",
		impact: "Revela uma busca por autenticidade e conexão com raízes culturais.",
	},
	{
		id: 2,
		title: "Cores Vibrantes Como Manifesto",
		image: "/images/colorful-african-ankara-fabric-patterns-on-fashion.jpg",
		excerpt:
			"Paletas ousadas que celebram a vida e desafiam a sobriedade ocidental.",
		impact: "Expressa resistência cultural e alegria como forma de protesto.",
	},
	{
		id: 3,
		title: "Alfaiataria Desconstruída",
		image: "/images/african-tailoring-contemporary-fashion.jpg",
		excerpt:
			"Estruturas clássicas ganham nova vida com técnicas africanas ancestrais.",
		impact: "Questiona padrões europeus e propõe novas narrativas de poder.",
	},
];

const analyses = [
	{
		title: "O Que o Streetwear Africano Diz Sobre Identidade",
		excerpt:
			"Além da estética: como jovens africanos usam a moda para reivindicar espaço e voz.",
		author: "Kwame Osei",
		readTime: "8 min",
	},
	{
		title: "Tecidos Inteligentes: Tradição Encontra Inovação",
		excerpt:
			"A tecnologia preserva saberes ancestrais e cria novos mercados sustentáveis.",
		author: "Aisha Kamara",
		readTime: "6 min",
	},
	{
		title: "Genderless Fashion: Liberdade Além das Etiquetas",
		excerpt:
			"Designers africanos lideram movimento que desafia binarismos de gênero.",
		author: "Zara Ndlovu",
		readTime: "7 min",
	},
];

const styleGallery = [
	{
		image: "/images/african-jewelry-statement-accessories.jpg",
		caption: "Acessórios que contam histórias",
	},
	{
		image: "/images/african-streetwear-urban-fashion.jpg",
		caption: "Urbano com alma africana",
	},
	{
		image: "/images/geometric-african-patterns-fashion.jpg",
		caption: "Geometria ancestral",
	},
	{
		image: "/images/upcycled-luxury-african-fashion.jpg",
		caption: "Luxo sustentável",
	},
];

export default function TendenciesPage() {
	return (
		<div>
			<header className="mb-20 text-center max-w-4xl mx-auto">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-balance">
					Tendências que Contam Histórias
				</h1>
				<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
					O que está em alta — e o que isso revela sobre o mundo.
				</p>
				<div className="mt-8 max-w-2xl mx-auto">
					<p className="text-base leading-relaxed text-muted-foreground">
						A moda é um espelho do tempo. Aqui, analisamos
						tendências com olhar crítico, entendendo o que elas
						dizem sobre comportamento, identidade e expressão. Do
						streetwear às passarelas, cada peça carrega uma
						narrativa — e nós contamos a sua.
					</p>
				</div>
			</header>

			{/* Destaques do Momento */}
			<section className="mb-24">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Destaques do Momento
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{featuredTrends.map((trend) => (
						<article key={trend.id} className="group">
							<div className="relative aspect-3/4 mb-4 overflow-hidden rounded-lg">
								<Image
									src={trend.image || "/placeholder.svg"}
									alt={trend.title}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
								{trend.title}
							</h3>
							<p className="text-sm text-muted-foreground mb-3 leading-relaxed">
								{trend.excerpt}
							</p>
							<div className="pt-3 border-t border-primary/20">
								<p className="text-xs italic text-primary">
									→ {trend.impact}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* Análises */}
			<section className="mb-24 bg-secondary/30 -mx-4 px-4 md:mx-0 md:px-12 py-16 rounded-lg">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Análises
				</h2>
				<div className="max-w-4xl mx-auto space-y-8">
					{analyses.map((analysis) => (
						<article
							key={analysis.title}
							className="border-l-2 border-primary pl-6 hover:border-primary/60 transition-colors"
						>
							<h3 className="text-2xl font-serif mb-2">
								{analysis.title}
							</h3>
							<p className="text-muted-foreground mb-3 leading-relaxed">
								{analysis.excerpt}
							</p>
							<div className="flex items-center gap-4 text-sm text-muted-foreground">
								<span>Por {analysis.author}</span>
								<span>•</span>
								<span>{analysis.readTime} de leitura</span>
								<Link
									href="#"
									className="ml-auto text-primary hover:underline"
								>
									Ler análise completa →
								</Link>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* Galeria de Estilos */}
			<section className="mb-24">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Galeria de Estilos
				</h2>
				<div className="grid md:grid-cols-2 gap-6">
					{styleGallery.map((item) => (
						<figure
							key={item.caption}
							className="group relative aspect-4/3 overflow-hidden rounded-lg"
						>
							<Image
								src={item.image || "/images/placeholder.svg"}
								alt={item.caption}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<figcaption className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
								<p className="text-white text-lg font-serif">
									{item.caption}
								</p>
							</figcaption>
						</figure>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="text-center py-16 border-t border-b">
				<h2 className="text-3xl md:text-4xl font-serif mb-4">
					Quer mais análises?
				</h2>
				<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
					Assine nossa newsletter e receba semanalmente as tendências
					que estão moldando o futuro da moda.
				</p>
				<Link
					href="/newsletter"
					className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium"
				>
					Leia Mais no Diário do Estilo
				</Link>
			</section>
		</div>
	);
}
