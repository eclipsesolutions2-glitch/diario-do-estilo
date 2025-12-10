import { HeroTitle } from "@/components/layout/hero-title";

export default function AboutUsPage() {
	return (
		<div className="container mx-auto">
			<HeroTitle
				title="Quem Somos"
				description="Falamos de moda global, crítica social e colocamos em evidência a moda africana como linguagem cultural contemporânea."
				tag="Sobre Nós"
			/>

			{/* Missão */}
			<section className="max-w-3xl mx-auto mt-20 mb-28">
				<h2 className="text-5xl font-serif leading-tight mb-12">
					Nossa Missão
				</h2>

				<div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
					<p>
						O Diário do Estilo nasceu da necessidade de criar um
						espaço onde a moda africana pudesse ser celebrada,
						interpretada e posicionada no cenário global.
					</p>

					<p>
						Acreditamos que moda é linguagem cultural, instrumento
						político e expressão de identidade. Nosso foco é elevar
						designers, artesãos e criadores africanos que estão
						redefinindo o futuro da indústria.
					</p>

					<p>
						Por meio de jornalismo cultural e crítica social,
						apresentamos a moda não apenas como estética, mas como
						força de transformação.
					</p>
				</div>
			</section>

			{/* Valores */}
			<section className="max-w-5xl mx-auto mb-32">
				<h2 className="text-5xl font-serif text-center mb-20">
					Nossos Valores
				</h2>

				<div className="grid md:grid-cols-3 gap-16">
					<div className="text-center">
						<div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 text-3xl bg-primary/5">
							🌍
						</div>

						<h3 className="text-2xl font-serif mb-4">
							Diversidade
						</h3>

						<p className="text-muted-foreground leading-relaxed">
							Celebramos identidades, territórios e narrativas que
							transformam a moda africana em potência global.
						</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 text-3xl bg-primary/5">
							♻️
						</div>

						<h3 className="text-2xl font-serif mb-4">
							Sustentabilidade
						</h3>

						<p className="text-muted-foreground leading-relaxed">
							Promovemos práticas conscientes que respeitam
							pessoas, processos e o meio ambiente.
						</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 text-3xl bg-primary/5">
							✊
						</div>

						<h3 className="text-2xl font-serif mb-4">
							Empoderamento
						</h3>

						<p className="text-muted-foreground leading-relaxed">
							Amplificamos vozes africanas e fortalecemos
							ecossistemas criativos locais.
						</p>
					</div>
				</div>
			</section>

			{/* O que fazemos */}
			<section className="max-w-4xl mx-auto mb-32">
				<h2 className="text-5xl font-serif mb-16">O Que Fazemos</h2>

				<div className="space-y-12">
					<div>
						<h3 className="text-3xl font-serif mb-4">
							Jornalismo de Moda
						</h3>

						<p className="text-muted-foreground text-lg leading-relaxed">
							Cobertura profunda de tendências, designers, eventos
							e movimentos que definem a moda africana
							contemporânea.
						</p>
					</div>

					<div>
						<h3 className="text-3xl font-serif mb-4">
							Crítica Social
						</h3>

						<p className="text-muted-foreground text-lg leading-relaxed">
							Analisamos os impactos culturais, sociais e
							ambientais da moda, priorizando justiça,
							representatividade e consciência.
						</p>
					</div>

					<div>
						<h3 className="text-3xl font-serif mb-4">
							Plataforma Cultural
						</h3>

						<p className="text-muted-foreground text-lg leading-relaxed">
							Exploramos as conexões entre moda, arte, música,
							arquitetura e identidade africana contemporânea.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
