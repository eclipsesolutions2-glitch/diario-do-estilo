import Link from "next/link";

const opinionArticles = [
	{
		title: "Fast Fashion: O Verdadeiro Custo da Moda Descartável",
		author: "Aisha Kamara",
		excerpt:
			"Enquanto consumimos, comunidades africanas pagam o preço ambiental e social.",
		readTime: "10 min",
		category: "Sustentabilidade",
	},
	{
		title: "Apropriação Cultural: Onde Traçar a Linha?",
		author: "Kwame Osei",
		excerpt:
			"Marcas ocidentais lucram com designs africanos enquanto criadores locais lutam por reconhecimento.",
		readTime: "8 min",
		category: "Justiça Cultural",
	},
	{
		title: "Representatividade Não é Favor, é Direito",
		author: "Zara Ndlovu",
		excerpt:
			"A indústria da moda ainda tem um longo caminho na inclusão real de corpos e identidades africanas.",
		readTime: "7 min",
		category: "Diversidade",
	},
];

const activistInterviews = [
	{
		name: "Orsola de Castro",
		role: "Cofundadora Fashion Revolution",
		quote: "Precisamos perguntar: quem fez minhas roupas? Em que condições?",
	},
	{
		name: "Adebayo Oke-Lawal",
		role: "Designer e Ativista LGBTQ+",
		quote: "Moda é política. Cada peça que crio é um ato de resistência e afirmação.",
	},
];

const sustainabilityData = [
	{ stat: "92 milhões", label: "Toneladas de resíduos têxteis por ano" },
	{ stat: "2%", label: "De trabalhadores têxteis ganham salário digno" },
	{ stat: "20%", label: "Da poluição industrial vem da moda" },
	{ stat: "60%", label: "Das roupas são descartadas em 1 ano" },
];
export default function SocialCriticismPage() {
	return (
		<div>
			<header className="mb-20 text-center max-w-4xl mx-auto">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-balance">
					Moda com Propósito
				</h1>
				<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
					Quando o estilo se transforma em consciência.
				</p>
				<div className="mt-8 max-w-2xl mx-auto">
					<p className="text-base leading-relaxed text-muted-foreground">
						A moda pode ser bonita — mas também deve ser justa. Aqui
						discutimos as contradições do setor, a responsabilidade
						das marcas e o papel do consumidor. Estilo é poder, e
						usar esse poder com propósito é o que nos move.
					</p>
				</div>
			</header>

			{/* Artigos de Opinião */}
			<section className="mb-24">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Artigos de Opinião
				</h2>
				<div className="max-w-4xl mx-auto space-y-8">
					{opinionArticles.map((article, index) => (
						<article
							key={index}
							className="border-b border-border pb-8 last:border-0"
						>
							<p className="text-xs text-primary uppercase tracking-wider mb-2">
								{article.category}
							</p>
							<h3 className="text-2xl md:text-3xl font-serif mb-3 hover:text-primary transition-colors">
								<Link href="#">{article.title}</Link>
							</h3>
							<p className="text-muted-foreground mb-4 leading-relaxed">
								{article.excerpt}
							</p>
							<div className="flex items-center gap-4 text-sm text-muted-foreground">
								<span>Por {article.author}</span>
								<span>•</span>
								<span>{article.readTime} de leitura</span>
								<Link
									href="#"
									className="ml-auto text-primary hover:underline"
								>
									Ler artigo completo →
								</Link>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* Entrevistas com Ativistas */}
			<section className="mb-24 bg-secondary/30 -mx-4 px-4 md:mx-0 md:px-12 py-16 rounded-lg">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					Vozes da Mudança
				</h2>
				<div className="max-w-4xl mx-auto space-y-12">
					{activistInterviews.map((interview, index) => (
						<article
							key={index}
							className="flex flex-col md:flex-row gap-6 items-start"
						>
							<div className="md:w-1/3">
								<h3 className="text-xl font-serif mb-1">
									{interview.name}
								</h3>
								<p className="text-sm text-primary">
									{interview.role}
								</p>
							</div>
							<blockquote className="md:w-2/3 text-lg italic text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
								"{interview.quote}"
							</blockquote>
						</article>
					))}
				</div>
			</section>

			{/* Dados e Infográficos */}
			<section className="mb-24">
				<h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
					A Realidade em Números
				</h2>
				<div className="grid md:grid-cols-4 gap-8">
					{sustainabilityData.map((data, index) => (
						<div key={index} className="text-center">
							<p className="text-4xl md:text-5xl font-serif text-primary mb-2">
								{data.stat}
							</p>
							<p className="text-sm text-muted-foreground">
								{data.label}
							</p>
						</div>
					))}
				</div>
				<p className="text-center text-sm text-muted-foreground mt-8 italic">
					Fonte: Fashion Revolution, ONU Meio Ambiente, 2024
				</p>
			</section>

			{/* Espaço Interativo */}
			<section className="mb-24 border border-primary/30 rounded-lg p-8 md:p-12">
				<h2 className="text-3xl md:text-4xl font-serif mb-6 text-center">
					O Que Você Mudaria na Moda?
				</h2>
				<p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
					Sua voz importa. Compartilhe suas ideias sobre como tornar a
					indústria da moda mais justa e sustentável.
				</p>
				<form className="max-w-2xl mx-auto space-y-4">
					<div>
						<label htmlFor="name" className="block text-sm mb-2">
							Seu nome
						</label>
						<input
							type="text"
							id="name"
							className="w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
							placeholder="Como você gostaria de ser chamado?"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm mb-2">
							Sua proposta de mudança
						</label>
						<textarea
							id="message"
							rows={6}
							className="w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
							placeholder="Compartilhe sua visão para uma moda mais consciente..."
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium"
					>
						Enviar Proposta
					</button>
				</form>
			</section>

			{/* CTA */}
			<section className="text-center py-16 border-t border-b">
				<h2 className="text-3xl md:text-4xl font-serif mb-4">
					Junte-se ao Movimento
				</h2>
				<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
					Receba análises profundas sobre os desafios e soluções para
					uma moda mais justa.
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
