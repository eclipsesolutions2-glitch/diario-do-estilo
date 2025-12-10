import { AdvertiseCard } from "./advertise-card";
import { AdvertiseManifesto } from "./advertise-manifesto";

export function AdvertiseSection() {
	return (
		<section id="anuncie">
			<div className="max-w-6xl mx-auto mb-20">
				<p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">
					Publicidade editorial
				</p>

				<h2 className="text-5xl font-serif leading-[0.95] tracking-tight mb-6">
					Anuncie na maior vitrine da moda africana contemporânea
				</h2>

				<p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
					Conectamos marcas visionárias a uma audiência que valoriza
					identidade, cultura, luxo e originalidade no cenário da moda
					africana global.
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-10 mb-24">
				<AdvertiseCard
					title="Editorial de Marca"
					description="Narrativas visuais inspiradas na estética africana contemporânea."
				/>
				<AdvertiseCard
					title="Campanhas Exclusivas"
					description="Exposição premium com estética de revista de luxo."
				/>
				<AdvertiseCard
					title="Parcerias Culturais"
					description="Colaborações que celebram identidade, herança e inovação."
				/>
			</div>

			<AdvertiseManifesto />
		</section>
	);
}
