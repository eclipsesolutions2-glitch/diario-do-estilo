import { Facebook, Instagram, Share2, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ArtigoPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	console.log({ slug });

	return (
		<div>
			<nav className="text-sm text-muted-foreground mb-8">
				<Link
					href="/"
					className="hover:text-[#0D7377] transition-colors"
				>
					Home
				</Link>
				<span className="mx-2">/</span>
				<Link
					href="/categoria/moda-africana"
					className="hover:text-[#0D7377] transition-colors"
				>
					Moda Africana
				</Link>
				<span className="mx-2">/</span>
				<span className="text-foreground">Artigo</span>
			</nav>

			{/* Article Header */}
			<header className="mb-8">
				<div className="inline-block px-4 py-1 bg-[#0D7377]/10 text-[#0D7377] text-sm font-medium rounded-full mb-4">
					Moda Africana
				</div>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
					A Revolução da Moda Africana Contemporânea
				</h1>
				<div className="flex items-center gap-4 text-sm text-muted-foreground">
					<span>Por Maria Silva</span>
					<span>•</span>
					<time>15 de Janeiro, 2025</time>
					<span>•</span>
					<span>8 min de leitura</span>
				</div>
			</header>

			{/* Featured Image */}
			<figure className="mb-12">
				<div className="relative aspect-video w-full overflow-hidden rounded-lg">
					<Image
						src="/elegant-african-fashion-model-in-contemporary-desi.jpg"
						alt="Modelo africana em design contemporâneo"
						fill
						className="object-cover"
						priority
					/>
				</div>
				<figcaption className="text-sm text-muted-foreground mt-3 text-center italic">
					Modelo apresentando coleção de moda africana contemporânea
				</figcaption>
			</figure>

			{/* Share Buttons */}
			<div className="flex items-center gap-3 mb-12 pb-8 border-b">
				<span className="text-sm font-medium">Compartilhar:</span>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full bg-transparent hover:bg-[#0D7377]/10 hover:text-[#0D7377] hover:border-[#0D7377]"
				>
					<Facebook className="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full bg-transparent hover:bg-[#0D7377]/10 hover:text-[#0D7377] hover:border-[#0D7377]"
				>
					<Twitter className="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full bg-transparent hover:bg-[#0D7377]/10 hover:text-[#0D7377] hover:border-[#0D7377]"
				>
					<Instagram className="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					className="rounded-full bg-transparent hover:bg-[#0D7377]/10 hover:text-[#0D7377] hover:border-[#0D7377]"
				>
					<Share2 className="h-4 w-4" />
				</Button>
			</div>

			{/* Article Content */}
			<article className="prose prose-lg max-w-none">
				<p className="text-xl leading-relaxed text-muted-foreground mb-8">
					A moda africana está vivendo um momento de renascimento
					global, com designers do continente conquistando passarelas
					internacionais e redefinindo os padrões da indústria
					fashion.
				</p>

				<h2 className="text-3xl font-serif mt-12 mb-6">
					O Despertar de uma Nova Era
				</h2>
				<p className="leading-relaxed mb-6">
					Nos últimos anos, temos testemunhado uma transformação
					significativa na forma como a moda africana é percebida e
					celebrada globalmente. Designers como Thebe Magugu, Imane
					Ayissi e Kenneth Ize estão levando a estética africana para
					os principais palcos da moda mundial, desde Paris até Nova
					York.
				</p>

				<p className="leading-relaxed mb-6">
					Esta revolução não é apenas sobre estampas vibrantes e
					tecidos tradicionais - embora estes elementos permaneçam
					fundamentais. Trata-se de uma reinterpretação contemporânea
					da herança cultural, mesclando técnicas ancestrais com
					silhuetas modernas e sustentabilidade.
				</p>

				<blockquote className="border-l-4 border-[#0D7377] pl-6 my-12 italic text-xl">
					"A moda africana não é uma tendência passageira. É uma força
					permanente que está redefinindo o que significa ser global e
					local ao mesmo tempo."
				</blockquote>

				<h2 className="text-3xl font-serif mt-12 mb-6">
					Sustentabilidade e Tradição
				</h2>
				<p className="leading-relaxed mb-6">
					Um dos aspectos mais fascinantes deste movimento é o
					compromisso com a sustentabilidade. Muitos designers
					africanos estão resgatando técnicas artesanais tradicionais,
					trabalhando diretamente com comunidades locais e utilizando
					materiais orgânicos e de origem ética.
				</p>

				<p className="leading-relaxed mb-6">
					O uso de tecidos como o Ankara, Kente e Bogolan não é apenas
					uma escolha estética, mas também uma declaração política e
					cultural. Cada padrão conta uma história, cada cor tem um
					significado, e cada peça carrega consigo séculos de
					tradição.
				</p>

				<div className="relative aspect-video w-full overflow-hidden rounded-lg my-12">
					<Image
						src="/colorful-african-ankara-fabric-patterns-on-fashion.jpg"
						alt="Padrões de tecido Ankara africano"
						fill
						className="object-cover"
					/>
				</div>

				<h2 className="text-3xl font-serif mt-12 mb-6">
					O Futuro é Africano
				</h2>
				<p className="leading-relaxed mb-6">
					À medida que olhamos para o futuro da moda, fica claro que a
					África desempenhará um papel cada vez mais central. Com uma
					população jovem, criativa e conectada digitalmente, o
					continente está posicionado para liderar a próxima onda de
					inovação na indústria.
				</p>

				<p className="leading-relaxed mb-6">
					As semanas de moda em Lagos, Joanesburgo e Dakar estão
					atraindo atenção internacional, e plataformas digitais estão
					permitindo que designers africanos alcancem audiências
					globais sem precisar passar pelos gatekeepers tradicionais
					da indústria.
				</p>
			</article>

			{/* Tags */}
			<div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t">
				<span className="text-sm font-medium">Tags:</span>
				<Link
					href="/african-fashion"
					className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-[#0D7377]/10 hover:text-[#0D7377] transition-colors"
				>
					Moda Africana
				</Link>
				<Link
					href="/culture"
					className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-[#0D7377]/10 hover:text-[#0D7377] transition-colors"
				>
					Cultura
				</Link>
				<Link
					href="#"
					className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-[#0D7377]/10 hover:text-[#0D7377] transition-colors"
				>
					Sustentabilidade
				</Link>
			</div>

			{/* Author Bio */}
			<div className="mt-12 p-8 bg-secondary/30 rounded-lg">
				<div className="flex items-start gap-4">
					<div className="w-20 h-20 rounded-full bg-[#0D7377]/20 shrink-0" />
					<div>
						<h3 className="font-semibold text-lg mb-2">
							Maria Silva
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Jornalista de moda especializada em cultura africana
							e sustentabilidade. Com mais de 10 anos de
							experiência, Maria tem coberto as principais semanas
							de moda do continente africano.
						</p>
					</div>
				</div>
			</div>

			{/* Related Articles */}
			<section className="mt-16">
				<h2 className="text-3xl font-serif mb-8">
					Artigos Relacionados
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Designers Emergentes da África Ocidental",
							image: "/young-african-fashion-designer-working-in-modern-s.jpg",
						},
						{
							title: "Beleza Natural: O Movimento de Aceitação Capilar",
							image: "/beautiful-african-woman-with-natural-afro-hair-bea.jpg",
						},
						{
							title: "Street Style: As Ruas de Lagos Como Passarela",
							image: "/stylish-african-street-fashion-in-lagos-nigeria-ur.jpg",
						},
					].map((article) => (
						<Link
							key={article.title}
							href="/artigo/exemplo"
							className="group"
						>
							<div className="relative aspect-3/4 overflow-hidden rounded-lg mb-4">
								<Image
									src={article.image || "/placeholder.svg"}
									alt={article.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<h3 className="font-semibold group-hover:text-[#0D7377] transition-colors">
								{article.title}
							</h3>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
