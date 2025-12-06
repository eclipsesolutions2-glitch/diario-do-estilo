import Image from "next/image";

export function LogoDiario({ src = "/favicon.svg" }: { src?: string }) {
	return (
		<div className="flex items-center gap-2">
			<Image
				src={src}
				alt="Logo do Diario do Estilo"
				width={32}
				height={32}
			/>
			<h1 className="font-serif text-2xl font-bold tracking-tight cursor-pointer">
				<span className="text-primary">Diário</span>{" "}
				<span className="text-foreground">Do Estilo</span>
			</h1>
		</div>
	);
}
