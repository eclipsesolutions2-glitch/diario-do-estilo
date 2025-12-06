import Image from "next/image";
// import { SignInForm } from "@/components/forms/auth/sign-in.form";

export default function SignInPage() {
	return (
		<main className="h-screen flex flex-col gap-6 md:flex-row-reverse">
			<div className="h-60 md:h-full md:w-1/2 p-4">
				<div className="relative w-full h-full overflow-hidden rounded-xl">
					<Image
						src="/images/background-01.jpg"
						alt="background banner 01"
						quality={100}
						fill
						className="w-full h-full object-cover bg-brand-900/30"
					/>
				</div>
			</div>
			<div className="flex-1 flex md:items-center justify-center px-4">
				<div className="flex flex-col gap-6">
					<div>
						{/* <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-full p-2 border-2 border-primary">
                                <Image src="/images/favicon.svg" alt="Logo do diario do estilo" fill className="" />
                            </div>
                            <span className="font-serif font-semibold text-2xl">
                                <span className="text-primary">Diário </span>do Estilo</span>
                        </div> */}
						<h1 className="text-2xl font-bold mb-2">
							Bem-vindo de volta 👋
						</h1>
						<p className="text-neutral-500 mb-2">
							Faça login para começar a gerenciar o teu site.
						</p>
					</div>
					{/* <SignInForm /> */}
				</div>
			</div>
		</main>
	);
}
