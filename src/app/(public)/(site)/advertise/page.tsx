export default function AdvertisePage() {
	return (
		<div>
			<section className="max-w-4xl mx-auto mb-20 text-center">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8">
					Anuncie Conosco
				</h1>
				<p className="text-2xl text-muted-foreground leading-relaxed">
					Conecte sua marca com uma audiência engajada e apaixonada
					por moda africana e cultura.
				</p>
			</section>

			{/* Stats Section */}
			<section className="max-w-5xl mx-auto mb-20">
				<div className="grid md:grid-cols-3 gap-8 text-center">
					<div className="p-8 bg-primary/5 rounded-lg">
						<div className="text-5xl font-bold text-primary mb-2">
							500K+
						</div>
						<p className="text-muted-foreground">
							Leitores Mensais
						</p>
					</div>
					<div className="p-8 bg-primary/5 rounded-lg">
						<div className="text-5xl font-bold text-primary mb-2">
							85%
						</div>
						<p className="text-muted-foreground">
							Taxa de Engajamento
						</p>
					</div>
					<div className="p-8 bg-primary/5 rounded-lg">
						<div className="text-5xl font-bold text-primary mb-2">
							50+
						</div>
						<p className="text-muted-foreground">
							Países Alcançados
						</p>
					</div>
				</div>
			</section>

			{/* Audience Section */}
			<section className="max-w-4xl mx-auto mb-20">
				<h2 className="text-4xl font-serif mb-8 text-center">
					Nossa Audiência
				</h2>
				<div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
					<p>
						O Diário Do Estilo alcança uma audiência global de
						profissionais criativos, entusiastas de moda, designers,
						artistas e consumidores conscientes interessados em moda
						africana e cultura.
					</p>
					<p>
						Nossos leitores são formadores de opinião, early
						adopters de tendências e consumidores com alto poder
						aquisitivo que valorizam autenticidade, sustentabilidade
						e diversidade cultural.
					</p>
				</div>
			</section>

			{/* Advertising Options */}
			<section className="max-w-5xl mx-auto mb-20">
				<h2 className="text-4xl font-serif mb-12 text-center">
					Opções de Publicidade
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="p-8 border rounded-lg hover:border-primary transition-colors">
						<h3 className="text-2xl font-serif mb-4">
							Display Ads
						</h3>
						<p className="text-muted-foreground mb-6 leading-relaxed">
							Banners estrategicamente posicionados em páginas de
							alto tráfego. Formatos responsivos e impactantes.
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li>• Homepage Banner</li>
							<li>• Sidebar Ads</li>
							<li>• In-Article Ads</li>
							<li>• Mobile Optimized</li>
						</ul>
					</div>

					<div className="p-8 border rounded-lg hover:border-primary transition-colors">
						<h3 className="text-2xl font-serif mb-4">
							Conteúdo Patrocinado
						</h3>
						<p className="text-muted-foreground mb-6 leading-relaxed">
							Artigos editoriais que contam a história da sua
							marca de forma autêntica e envolvente.
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li>• Artigos Longform</li>
							<li>• Entrevistas</li>
							<li>• Lookbooks</li>
							<li>• Vídeo Content</li>
						</ul>
					</div>

					<div className="p-8 border rounded-lg hover:border-primary transition-colors">
						<h3 className="text-2xl font-serif mb-4">Newsletter</h3>
						<p className="text-muted-foreground mb-6 leading-relaxed">
							Alcance diretamente a caixa de entrada de milhares
							de assinantes engajados.
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li>• Sponsored Placement</li>
							<li>• Dedicated Send</li>
							<li>• Product Features</li>
							<li>• Event Promotion</li>
						</ul>
					</div>

					<div className="p-8 border rounded-lg hover:border-primary transition-colors">
						<h3 className="text-2xl font-serif mb-4">
							Redes Sociais
						</h3>
						<p className="text-muted-foreground mb-6 leading-relaxed">
							Amplifique sua mensagem através dos nossos canais
							sociais com milhares de seguidores.
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li>• Instagram Posts</li>
							<li>• Stories Takeover</li>
							<li>• Twitter Threads</li>
							<li>• TikTok Content</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<section className="max-w-2xl mx-auto">
				<div className="bg-primary/5 rounded-lg p-8 md:p-12">
					<h2 className="text-3xl font-serif mb-6 text-center">
						Entre em Contato
					</h2>
					<p className="text-center text-muted-foreground mb-8">
						Preencha o formulário abaixo e nossa equipe comercial
						entrará em contato em até 24 horas.
					</p>
					<form className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Nome Completo
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Seu nome"
								/>
							</div>
							<div>
								<label
									htmlFor="company"
									className="block text-sm font-medium mb-2"
								>
									Empresa
								</label>
								<input
									type="text"
									id="company"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Nome da empresa"
								/>
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="seu@email.com"
								/>
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium mb-2"
								>
									Telefone
								</label>
								<input
									type="tel"
									id="phone"
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="+244 000 000 000"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="interest"
								className="block text-sm font-medium mb-2"
							>
								Interesse em
							</label>
							<select
								id="interest"
								className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							>
								<option>Selecione uma opção</option>
								<option>Display Ads</option>
								<option>Conteúdo Patrocinado</option>
								<option>Newsletter</option>
								<option>Redes Sociais</option>
								<option>Pacote Completo</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="budget"
								className="block text-sm font-medium mb-2"
							>
								Orçamento Estimado
							</label>
							<select
								id="budget"
								className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							>
								<option>Selecione uma faixa</option>
								<option>Até $5,000</option>
								<option>$5,000 - $10,000</option>
								<option>$10,000 - $25,000</option>
								<option>$25,000+</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium mb-2"
							>
								Mensagem
							</label>
							<textarea
								id="message"
								rows={5}
								className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
								placeholder="Conte-nos mais sobre seus objetivos..."
							/>
						</div>

						<button
							type="submit"
							className="w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-[#0A5F62] transition-colors font-medium text-lg"
						>
							Enviar Solicitação
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
