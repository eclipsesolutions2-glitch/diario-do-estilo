import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import { DESIGNERS } from "./data";

export function DesignersSpotlightSession() {
	return (
		<section className="py-20 px-16 container m-auto bg-brand-100/5 my-12 rounded-sm">
			<div className="flex flex-col md:flex-row gap-12 items-center">
				<div className="w-full md:w-1/3">
					<span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
						Diretório
					</span>
					<h2 className="font-serif text-5xl mb-6 text-foreground">
						Talentos em Ascensão
					</h2>
					<p className="font-sans text-muted-foreground mb-8 leading-relaxed">
						Conheça os criadores que estão moldando a estética
						global a partir de Lagos, Joanesburgo, Dakar e Acra.
					</p>
					<Link href="/designers">
						<Button className="bg-brand-900 text-background hover:bg-primary rounded-none px-8 py-6 uppercase tracking-widest text-xs font-bold transition-all">
							Explorar Designers
						</Button>
					</Link>
				</div>

				<div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
					{DESIGNERS.slice(0, 2).map((designer) => (
						<div
							key={designer.id}
							className="relative aspect-3/4 group overflow-hidden cursor-pointer"
						>
							<Image
								src={designer.image}
								alt={designer.name}
								fill
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
								<h3 className="text-white font-serif text-2xl italic">
									{designer.name}
								</h3>
								<span className="text-white/80 text-xs uppercase tracking-widest mt-2">
									{designer.location}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
