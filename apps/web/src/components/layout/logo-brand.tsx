import Image from "next/image";

export function LogoBrand() {
	return (
		<div className="relative h-20 w-40">
			<Image
				src="/images/logo-comp.webp"
				alt="Logo do Diario do Estilo"
				fill
				className="-ml-2 object-cover"
			/>
		</div>
	);
}
