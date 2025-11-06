"use client";
import { Facebook, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
	const [isLogin, setIsLogin] = useState(true);
	return (
		<div className="container mx-auto">
			<div className="max-w-md mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-serif mb-3">
						{isLogin ? "Bem-vindo de Volta" : "Crie sua Conta"}
					</h1>
					<p className="text-muted-foreground">
						{isLogin
							? "Entre para acessar conteúdo exclusivo"
							: "Junte-se à nossa comunidade de moda"}
					</p>
				</div>

				<div className="space-y-3 mb-6">
					<Button
						variant="outline"
						className="w-full bg-transparent hover:bg-[#0D7377]/10 hover:text-[#0D7377] hover:border-[#0D7377]"
						size="lg"
					>
						<Mail className="w-5 h-5 mr-2" />
						Continuar com Google
					</Button>
					<Button
						variant="outline"
						className="w-full bg-transparent hover:bg-[#0D7377]/10 hover:text-[#0D7377] hover:border-[#0D7377]"
						size="lg"
					>
						<Facebook className="w-5 h-5 mr-2" />
						Continuar com Facebook
					</Button>
				</div>

				<div className="relative mb-6">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-4 bg-background text-muted-foreground">
							ou continue com email
						</span>
					</div>
				</div>

				<form className="space-y-4">
					{!isLogin && (
						<div>
							<label
								htmlFor="nome"
								className="block text-sm font-medium mb-2"
							>
								Nome Completo
							</label>
							<Input id="nome" placeholder="Seu nome" required />
						</div>
					)}

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium mb-2"
						>
							Email
						</label>
						<Input
							id="email"
							type="email"
							placeholder="seu@email.com"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="senha"
							className="block text-sm font-medium mb-2"
						>
							Senha
						</label>
						<Input
							id="senha"
							type="password"
							placeholder="••••••••"
							required
						/>
					</div>

					{!isLogin && (
						<div>
							<label
								htmlFor="confirmar-senha"
								className="block text-sm font-medium mb-2"
							>
								Confirmar Senha
							</label>
							<Input
								id="confirmar-senha"
								type="password"
								placeholder="••••••••"
								required
							/>
						</div>
					)}

					{isLogin && (
						<div className="flex items-center justify-between text-sm">
							<label className="flex items-center gap-2">
								<input type="checkbox" />
								<span>Lembrar de mim</span>
							</label>
							<Link
								href="/recuperar-senha"
								className="text-[#0D7377] hover:underline"
							>
								Esqueceu a senha?
							</Link>
						</div>
					)}

					{!isLogin && (
						<div>
							<label className="flex items-start gap-2 text-sm">
								<input
									type="checkbox"
									className="mt-1"
									required
								/>
								<span className="text-muted-foreground">
									Concordo com os{" "}
									<Link
										href="/termos"
										className="text-[#0D7377] hover:underline"
									>
										Termos de Uso
									</Link>{" "}
									e{" "}
									<Link
										href="/privacidade"
										className="text-[#0D7377] hover:underline"
									>
										Política de Privacidade
									</Link>
								</span>
							</label>
						</div>
					)}

					<Button
						type="submit"
						size="lg"
						className="w-full bg-[#0D7377] hover:bg-[#0A5F62]"
					>
						{isLogin ? "Entrar" : "Criar Conta"}
					</Button>
				</form>

				<div className="text-center mt-6">
					<p className="text-sm text-muted-foreground">
						{isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
						<Button
							variant="link"
							onClick={() => setIsLogin(!isLogin)}
							className="text-[#0D7377] font-medium p-0"
						>
							{isLogin ? "Cadastre-se" : "Faça login"}
						</Button>
					</p>
				</div>

				{!isLogin && (
					<div className="mt-12 p-6 bg-[#0D7377]/5 rounded-lg">
						<h3 className="font-semibold mb-4 text-center">
							Benefícios de ser membro
						</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li className="flex items-center gap-2">
								<span className="text-[#0D7377]">✓</span>
								Acesso a artigos exclusivos
							</li>
							<li className="flex items-center gap-2">
								<span className="text-[#0D7377]">✓</span>
								Newsletter semanal personalizada
							</li>
							<li className="flex items-center gap-2">
								<span className="text-[#0D7377]">✓</span>
								Comentários e interação com autores
							</li>
							<li className="flex items-center gap-2">
								<span className="text-[#0D7377]">✓</span>
								Convites para eventos exclusivos
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
