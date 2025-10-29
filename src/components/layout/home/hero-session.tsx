import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative h-[70vh] md:h-[85vh] bg-muted overflow-hidden">
			<div className="absolute inset-0">
				<Image
					src="/elegant-african-fashion-model-in-contemporary-desi.jpg"
					alt="Moda Africana Contemporânea"
					className="w-full h-full object-cover"
					fill
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
			</div>

			<div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex items-end pb-12 md:pb-20">
				<div className="max-w-3xl text-white">
					<div className="inline-block px-3 py-1 bg-[#0D7377] text-white text-xs font-semibold uppercase tracking-wider mb-4">
						Moda Africana
					</div>
					<h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance leading-tight">
						O Renascimento da Moda Africana na Cena Global
					</h2>
					<p className="text-lg md:text-xl text-white/90 mb-6 text-pretty leading-relaxed max-w-2xl">
						Exploramos como designers africanos estão redefinindo a
						indústria da moda com criatividade, autenticidade e uma
						visão única que celebra a cultura local.
					</p>

					<Button
						size="lg"
						asChild
						className="bg-[#14FFEC] text-black hover:bg-[#14FFEC]/90 font-semibold"
					>
						<Link
							href={`/article/${"A Revolução da Moda Africana Contemporânea".trim().split(" ").join("-").toLowerCase()}`}
						>
							Ler Artigo Completo
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
