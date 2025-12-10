import Image from "next/image";

export function ArticleTag() {
	return (
		<div className="flex justify-center my-20">
			<div className="relative h-20 w-40">
				<Image
					src="/images/logotipo-text.webp"
					alt="Logo do Diario do Estilo"
					fill
					className="-ml-2 object-cover"
				/>
			</div>
		</div>
	);
}
