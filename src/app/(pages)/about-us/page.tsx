import Image from "next/image";

const teamMembers = [
	{
		name: "Maria Silva",
		role: "Editora-Chefe",
		bio: "Jornalista com 15 anos de experiência em moda e cultura. Especialista em moda africana contemporânea.",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
	},
	{
		name: "João Santos",
		role: "Editor de Moda",
		bio: "Designer de moda formado em Lagos. Apaixonado por tecidos tradicionais e inovação sustentável.",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
	},
	{
		name: "Ana Costa",
		role: "Editora de Cultura",
		bio: "Antropóloga e escritora. Dedica-se a explorar as conexões entre cultura, arte e moda africana.",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
	},
	{
		name: "Pedro Lima",
		role: "Diretor de Fotografia",
		bio: "Fotógrafo premiado especializado em moda editorial. Seu trabalho celebra a beleza africana.",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
	},
	{
		name: "Carla Mendes",
		role: "Editora de Crítica Social",
		bio: "Ativista e jornalista investigativa. Foca em questões de justiça social na indústria da moda.",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
	},
	{
		name: "Lucas Ferreira",
		role: "Editor de Tendências",
		bio: "Consultor de moda e trend forecaster. Identifica e analisa as tendências emergentes da moda africana.",
		image: "/elegant-african-fashion-model-in-contemporary-desi.jpg",
	},
];

export default function AboutUs() {
	return (
		<div>
			<section className="max-w-4xl mx-auto mb-20">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-center">
					Quem Somos
				</h1>
				<p className="text-2xl text-center text-muted-foreground leading-relaxed mb-12">
					Falamos de moda global e crítica social, colocamos em
					evidência a moda africana e a cultura local.
				</p>

				<div className="relative aspect-21/9 w-full overflow-hidden rounded-lg mb-12">
					<Image
						src="/elegant-african-fashion-model-in-contemporary-desi.jpg"
						alt="Diário Do Estilo"
						fill
						className="object-cover"
					/>
				</div>
			</section>

			<section className="max-w-3xl mx-auto mb-20">
				<h2 className="text-4xl font-serif mb-8">Nossa Missão</h2>
				<div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
					<p>
						O Diário Do Estilo nasceu da necessidade de criar um
						espaço onde a moda africana pudesse ser celebrada,
						discutida e elevada ao patamar que merece no cenário
						global.
					</p>
					<p>
						Acreditamos que a moda é mais do que roupas - é cultura,
						identidade, história e expressão. Nossa missão é
						destacar designers, artesãos e criadores africanos que
						estão moldando o futuro da indústria fashion.
					</p>
					<p>
						Através de crítica social consciente e jornalismo de
						qualidade, buscamos não apenas mostrar tendências, mas
						também questionar, provocar e inspirar mudanças
						positivas na indústria da moda.
					</p>
				</div>
			</section>

			<section className="max-w-5xl mx-auto mb-20">
				<h2 className="text-4xl font-serif mb-12 text-center">
					Nossos Valores
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="text-center">
						<div className="w-16 h-16 bg-[#0D7377]/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-3xl">🌍</span>
						</div>
						<h3 className="text-xl font-semibold mb-3">
							Diversidade
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Celebramos a riqueza cultural e a diversidade da
							moda africana em todas as suas formas.
						</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-[#0D7377]/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-3xl">♻️</span>
						</div>
						<h3 className="text-xl font-semibold mb-3">
							Sustentabilidade
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Promovemos práticas sustentáveis e éticas na
							indústria da moda.
						</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-[#0D7377]/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-3xl">✊</span>
						</div>
						<h3 className="text-xl font-semibold mb-3">
							Empoderamento
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Damos voz a designers e artesãos locais,
							fortalecendo comunidades.
						</p>
					</div>
				</div>
			</section>

			<section className="max-w-3xl mx-auto mb-20">
				<h2 className="text-4xl font-serif mb-8">O Que Fazemos</h2>
				<div className="space-y-8">
					<div>
						<h3 className="text-2xl font-semibold mb-3">
							Jornalismo de Moda
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Cobertura aprofundada de tendências, eventos e
							personalidades que estão moldando a moda africana
							contemporânea.
						</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold mb-3">
							Crítica Social
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Análises críticas sobre os impactos sociais,
							econômicos e ambientais da indústria da moda, com
							foco em justiça e equidade.
						</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold mb-3">
							Plataforma Cultural
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							Espaço para explorar as conexões entre moda, arte,
							música, cinema e outras expressões culturais
							africanas.
						</p>
					</div>
				</div>
			</section>

			<section className="max-w-3xl mx-auto text-center bg-[#0D7377]/5 rounded-lg p-12">
				<h2 className="text-3xl font-serif mb-4">
					Conheça Nossa Equipe
				</h2>
				<p className="text-lg text-muted-foreground mb-8">
					Descubra as pessoas apaixonadas que tornam o Diário Do
					Estilo possível.
				</p>
				<a
					href="/equipe"
					className="inline-block px-8 py-3 bg-[#0D7377] text-white rounded-lg hover:bg-[#0A5F62] transition-colors font-medium"
				>
					Ver Equipe
				</a>
			</section>

			<section id="equipe" className="max-w-6xl mx-auto my-20">
				<section className="max-w-4xl mx-auto mb-20 text-center">
					<h2 className="text-3xl font-serif mb-4">Nossa Equipe</h2>
					<p className="text-muted-foreground leading-relaxed">
						Conheça as pessoas apaixonadas que tornam o Diário Do
						Estilo possível.
					</p>
				</section>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
					{teamMembers.map((member) => (
						<div key={member.name} className="text-center group">
							<div className="relative aspect-square w-full max-w-xs mx-auto mb-6 overflow-hidden rounded-lg">
								<Image
									src={member.image}
									alt={member.name}
									className="object-cover shadow-md hover:scale-105 transition-transform"
									fill
								/>
								<div className="w-full h-full bg-[#0D7377]/20 group-hover:bg-[#0D7377]/30 transition-colors" />
							</div>
							<h3 className="text-2xl font-serif mb-2">
								{member.name}
							</h3>
							<p className="text-[#0D7377] font-medium mb-4">
								{member.role}
							</p>
							<p className="text-muted-foreground leading-relaxed">
								{member.bio}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
