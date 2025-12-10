import Link from "next/link";

export default function PrivacyPolicy() {
	return (
		<div>
			<div className="max-w-4xl mx-auto">
				<header className="mb-12">
					<h1 className="text-5xl md:text-6xl font-serif mb-6">
						Política de Privacidade
					</h1>
					<p className="text-muted-foreground">
						Última atualização: 29 de Outubro, 2025
					</p>
				</header>

				<div className="prose prose-lg max-w-none space-y-8">
					<section>
						<h2 className="text-3xl font-serif mb-4">
							1. Introdução
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							O Diário Do Estilo ("nós", "nosso" ou "nos") está
							comprometido em proteger sua privacidade. Esta
							Política de Privacidade explica como coletamos,
							usamos, divulgamos e protegemos suas informações
							quando você visita nosso site.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">
							2. Informações que Coletamos
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							Coletamos vários tipos de informações para fornecer
							e melhorar nosso serviço:
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li>
								<strong>Informações Pessoais:</strong> Nome,
								endereço de e-mail, e outras informações que
								você nos fornece voluntariamente.
							</li>
							<li>
								<strong>Dados de Uso:</strong> Informações sobre
								como você acessa e usa nosso site, incluindo
								páginas visitadas e tempo gasto.
							</li>
							<li>
								<strong>
									Cookies e Tecnologias Similares:
								</strong>{" "}
								Usamos cookies para melhorar sua experiência.
								Veja nossa{" "}
								<Link
									href="/cookies"
									className="text-primary hover:underline"
								>
									Política de Cookies
								</Link>
								para mais detalhes.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">
							3. Como Usamos Suas Informações
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							Usamos as informações coletadas para:
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li>• Fornecer, operar e manter nosso site</li>
							<li>
								• Melhorar, personalizar e expandir nosso site
							</li>
							<li>
								• Entender e analisar como você usa nosso site
							</li>
							<li>
								• Desenvolver novos produtos, serviços, recursos
								e funcionalidades
							</li>
							<li>
								• Comunicar com você, diretamente ou através de
								parceiros
							</li>
							<li>
								• Enviar newsletters e atualizações (com seu
								consentimento)
							</li>
							<li>• Detectar e prevenir fraudes</li>
						</ul>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">
							4. Compartilhamento de Informações
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Não vendemos, trocamos ou transferimos suas
							informações pessoais para terceiros sem seu
							consentimento, exceto quando necessário para
							fornecer nossos serviços ou quando exigido por lei.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">
							5. Segurança dos Dados
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Implementamos medidas de segurança técnicas e
							organizacionais apropriadas para proteger suas
							informações pessoais contra acesso não autorizado,
							alteração, divulgação ou destruição.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">
							6. Seus Direitos
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							Você tem o direito de:
						</p>
						<ul className="space-y-2 text-muted-foreground">
							<li>• Acessar suas informações pessoais</li>
							<li>• Corrigir informações imprecisas</li>
							<li>• Solicitar a exclusão de suas informações</li>
							<li>
								• Opor-se ao processamento de suas informações
							</li>
							<li>• Solicitar a portabilidade de seus dados</li>
							<li>
								• Retirar seu consentimento a qualquer momento
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">
							7. Links para Outros Sites
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Nosso site pode conter links para sites de
							terceiros. Não somos responsáveis pelas práticas de
							privacidade desses sites. Recomendamos que você leia
							as políticas de privacidade de cada site que
							visitar.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">
							8. Alterações a Esta Política
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Podemos atualizar nossa Política de Privacidade
							periodicamente. Notificaremos você sobre quaisquer
							alterações publicando a nova política nesta página e
							atualizando a data de "última atualização".
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-serif mb-4">9. Contato</h2>
						<p className="text-muted-foreground leading-relaxed">
							Se você tiver dúvidas sobre esta Política de
							Privacidade, entre em contato conosco:
						</p>
						<div className="mt-4 p-6 bg-primary/5 rounded-lg">
							<p className="text-muted-foreground">
								<strong>Email:</strong>{" "}
								privacidade@diariodoestilo.com
								<br />
								<strong>Endereço:</strong> Luanda, Angola - Rua
								da Moda, 123
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
