import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
	return (
		<div className="min-h-[calc(100dvh-30rem)] flex flex-col items-center justify-center text-gray-800">
			<h1 className="text-6xl font-bold tracking-tight">404</h1>
			<p className="mt-2 text-lg text-gray-600">Página não encontrada</p>
			<p className="mt-1 text-sm text-gray-500">
				Parece que o conteúdo que procura saiu das passarelas.
			</p>

			<Link href="/" className="mt-6">
				<Button
					variant="outline"
					className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-primary transition"
				>
					Voltar ao início
				</Button>
			</Link>
		</div>
	);
}
