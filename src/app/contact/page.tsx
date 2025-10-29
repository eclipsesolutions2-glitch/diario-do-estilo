import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SignInPage() {
	return (
		<div className="container mx-auto">
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<header className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
						Entre em Contato
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Tem uma história para compartilhar? Quer colaborar
						conosco? Estamos ansiosos para ouvir você.
					</p>
				</header>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div>
						<h2 className="text-2xl font-serif mb-6">
							Envie uma Mensagem
						</h2>
						<form className="space-y-6">
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="nome"
										className="block text-sm font-medium mb-2"
									>
										Nome *
									</label>
									<Input
										id="nome"
										placeholder="Seu nome completo"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email *
									</label>
									<Input
										id="email"
										type="email"
										placeholder="seu@email.com"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="assunto"
									className="block text-sm font-medium mb-2"
								>
									Assunto *
								</label>
								<Input
									id="assunto"
									placeholder="Sobre o que você quer falar?"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="mensagem"
									className="block text-sm font-medium mb-2"
								>
									Mensagem *
								</label>
								<Textarea
									id="mensagem"
									placeholder="Escreva sua mensagem aqui..."
									rows={6}
									required
								/>
							</div>

							<div>
								<label className="flex items-start gap-2 text-sm">
									<input
										type="checkbox"
										className="mt-1"
										required
									/>
									<span className="text-muted-foreground">
										Concordo em receber comunicações do
										Diário Do Estilo e aceito a política de
										privacidade.
									</span>
								</label>
							</div>

							<Button
								type="submit"
								size="lg"
								className="w-full bg-[#0D7377] hover:bg-[#0A5F62]"
							>
								Enviar Mensagem
							</Button>
						</form>
					</div>

					{/* Contact Info */}
					<div>
						<h2 className="text-2xl font-serif mb-6">
							Informações de Contato
						</h2>

						<div className="space-y-8 mb-12">
							<div className="flex gap-4">
								<div className="w-12 h-12 bg-[#0D7377]/10 rounded-full flex items-center justify-center shrink-0">
									<Mail className="w-5 h-5 text-[#0D7377]" />
								</div>
								<div>
									<h3 className="font-semibold mb-1">
										Email
									</h3>
									<p className="text-muted-foreground">
										contato@diariodoestilo.com
									</p>
									<p className="text-muted-foreground">
										redacao@diariodoestilo.com
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="w-12 h-12 bg-[#0D7377]/10 rounded-full flex items-center justify-center shrink-0">
									<Phone className="w-5 h-5 text-[#0D7377]" />
								</div>
								<div>
									<h3 className="font-semibold mb-1">
										Telefone
									</h3>
									<p className="text-muted-foreground">
										+244 123 456 789
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										Seg - Sex: 9h às 18h
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="w-12 h-12 bg-[#0D7377]/10 rounded-full flex items-center justify-center shrink-0">
									<MapPin className="w-5 h-5 text-[#0D7377]" />
								</div>
								<div>
									<h3 className="font-semibold mb-1">
										Endereço
									</h3>
									<p className="text-muted-foreground">
										Luanda, Angola
										<br />
										Rua da Moda, 123
									</p>
								</div>
							</div>
						</div>

						{/* Collaboration Section */}
						<div
							id="anuncie"
							className="bg-[#0D7377]/5 rounded-lg p-6"
						>
							<h3 className="text-xl font-serif mb-3">
								Colabore Conosco
							</h3>
							<p className="text-muted-foreground mb-4 leading-relaxed">
								Somos sempre abertos a colaborações com
								designers, fotógrafos, escritores e criativos
								que compartilham nossa visão.
							</p>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>• Submissão de artigos</li>
								<li>• Parcerias editoriais</li>
								<li>• Oportunidades de publicidade</li>
								<li>• Cobertura de eventos</li>
							</ul>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<section className="mt-20">
					<h2 className="text-3xl font-serif mb-8 text-center">
						Perguntas Frequentes
					</h2>
					<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<div className="border rounded-lg p-6 hover:border-[#0D7377] transition-colors">
							<h3 className="font-semibold mb-2">
								Como posso submeter um artigo?
							</h3>
							<p className="text-sm text-muted-foreground">
								Envie sua proposta para
								redacao@diariodoestilo.com com um resumo e
								amostras do seu trabalho.
							</p>
						</div>
						<div className="border rounded-lg p-6 hover:border-[#0D7377] transition-colors">
							<h3 className="font-semibold mb-2">
								Vocês aceitam press releases?
							</h3>
							<p className="text-sm text-muted-foreground">
								Sim! Envie para contato@diariodoestilo.com.
								Analisamos todas as submissões cuidadosamente.
							</p>
						</div>
						<div className="border rounded-lg p-6 hover:border-[#0D7377] transition-colors">
							<h3 className="font-semibold mb-2">
								Como anunciar no site?
							</h3>
							<p className="text-sm text-muted-foreground">
								Entre em contato conosco para discutir
								oportunidades de publicidade e parcerias
								comerciais.
							</p>
						</div>
						<div className="border rounded-lg p-6 hover:border-[#0D7377] transition-colors">
							<h3 className="font-semibold mb-2">
								Posso republicar conteúdo?
							</h3>
							<p className="text-sm text-muted-foreground">
								Todo conteúdo é protegido por direitos autorais.
								Entre em contato para solicitar permissão.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
