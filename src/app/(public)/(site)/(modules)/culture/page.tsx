import Image from "next/image";
import Link from "next/link";

const interviews = [
	{
		name: "Yinka Shonibare",
		role: "Artista Visual",
		quote: "A moda é política. Cada tecido que escolho carrega séculos de história colonial e resistência.",
		image: "/images/african-artist-portrait.jpg",
	},
	{
		name: "Thebe Magugu",
		role: "Designer de Moda",
		quote: "Meu trabalho é sobre contar histórias sul-africanas através de cada costura e estampa.",
		image: "/images/fashion-designer-portrait.png",
	},
];

const culturalInfluences = [
	{
		title: "Afrobeat: Ritmo que Veste",
		excerpt:
			"Como Fela Kuti, Burna Boy e Wizkid influenciam o que vestimos hoje.",
		category: "Música",
	},
	{
		title: "Cinema de Nollywood e Estética Visual",
		excerpt:
			"A indústria cinematográfica nigeriana como laboratório de moda.",
		category: "Cinema",
	},
	{
		title: "Literatura Africana Contemporânea",
		excerpt:
			"Chimamanda Ngozi Adichie e a moda como narrativa de identidade.",
		category: "Literatura",
	},
];

const timeline = [
	{
		year: "1960s",
		event: "Independências africanas inspiram moda pan-africana",
	},
	{ year: "1980s", event: "Hip-hop africano cria nova estética urbana" },
	{ year: "2000s", event: "Nollywood populariza moda africana globalmente" },
	{
		year: "2020s",
		event: "Designers africanos dominam semanas de moda internacionais",
	},
];

const communityHighlights = [
	{
		title: "Atelier Koché",
		description:
			"Coletivo de designers que transforma resíduos em alta costura.",
		location: "Dakar, Senegal",
	},
	{
		title: "Lagos Fashion Week",
		description:
			"Plataforma que conecta criadores africanos ao mercado global.",
		location: "Lagos, Nigéria",
	},
	{
		title: "Movimento Afropunk",
		description:
			"Cultura alternativa que celebra negritude através da moda.",
		location: "Pan-africano",
	},
];

export default function CulturePage() {
	return (
		<div>
			<header className="mb-20 text-center max-w-4xl mx-auto">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-balance">
					Moda é Cultura Viva
				</h1>
				<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
					Entre o tecido e o conceito — o estilo como linguagem.
				</p>
				<div className="mt-8 max-w-2xl mx-auto">
					<p className="text-base leading-relaxed text-muted-foreground">
						A moda não vive isolada — ela pulsa nas ruas, nos palcos
						e nas telas. Nesta seção, exploramos como a cultura
						inspira o vestir, revelando conexões entre arte,
						expressão e identidade. Cada cor, textura e forma conta
						uma história coletiva.
					</p>
				</div>
			</header>

			{/* Entrevistas */}
			<section className="mb-24">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Vozes da Cultura
				</h2>
				<div className="grid md:grid-cols-2 gap-12">
					{interviews.map((interview) => (
						<article key={interview.name} className="group">
							<div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
								<Image
									src={interview.image || "/placeholder.svg"}
									alt={interview.name}
									fill
									className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
								/>
							</div>
							<p className="text-sm text-primary mb-2">
								{interview.role}
							</p>
							<h3 className="text-2xl font-serif mb-4">
								{interview.name}
							</h3>
							<blockquote className="text-lg italic text-muted-foreground leading-relaxed border-l-2 border-primary pl-4">
								"{interview.quote}"
							</blockquote>
							<Link
								href="#"
								className="inline-block mt-4 text-primary hover:underline"
							>
								Ler entrevista completa →
							</Link>
						</article>
					))}
				</div>
			</section>

			{/* Influências Culturais */}
			<section className="mb-24 bg-secondary/30 -mx-4 px-4 md:mx-0 md:px-12 py-16 rounded-lg">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Influências Culturais
				</h2>
				<div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
					{culturalInfluences.map((influence) => (
						<article key={influence.title} className="text-center">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🎭</span>
							</div>
							<p className="text-xs text-primary uppercase tracking-wider mb-2">
								{influence.category}
							</p>
							<h3 className="text-xl font-serif mb-3">
								{influence.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{influence.excerpt}
							</p>
						</article>
					))}
				</div>
			</section>

			{/* Linha do Tempo */}
			<section className="mb-24">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Como a Cultura Moldou o Vestir
				</h2>
				<div className="max-w-3xl mx-auto">
					<div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
						{timeline.map((item) => (
							<div key={item.event} className="relative">
								<div className="absolute -left-[41px] w-8 h-8 bg-primary rounded-full border-4 border-background" />
								<p className="text-2xl font-serif text-primary mb-2">
									{item.year}
								</p>
								<p className="text-lg text-muted-foreground">
									{item.event}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Destaques da Comunidade */}
			<section className="mb-24">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Destaques da Comunidade
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{communityHighlights.map((highlight) => (
						<article
							key={highlight.title}
							className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
						>
							<h3 className="text-xl font-serif mb-3">
								{highlight.title}
							</h3>
							<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
								{highlight.description}
							</p>
							<p className="text-xs text-primary">
								📍 {highlight.location}
							</p>
						</article>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="text-center py-16 border-t border-b">
				<h2 className="text-3xl md:text-4xl font-serif mb-4">
					Explore Mais Cultura
				</h2>
				<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
					Descubra como arte, música e tradição se entrelaçam com a
					moda africana.
				</p>
				<Link
					href="/newsletter"
					className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium"
				>
					Assine Nossa Newsletter
				</Link>
			</section>
		</div>
	);
}
