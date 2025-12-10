import { AdvertiseCTA } from "@/components/advertise/advertise-cta";
import { AdvertiseSection } from "@/components/advertise/advertise-section";
import { HeroTitle } from "@/components/layout/hero-title";

export default function Page() {
	return (
		<div className="container mx-auto">
			<HeroTitle
				title="Anuncie"
				description="Sua marca no centro da narrativa da moda africana."
				tag="Publicidade"
			/>
			<AdvertiseSection />
			<AdvertiseCTA />
		</div>
	);
}
