"use client";

import { Button } from "@workspace/ui/components/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export function ContactForm() {
	const form = useForm();
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="bg-background border p-8 rounded-none"
		>
			<h2 className="text-3xl font-serif mb-2 tracking-tight">
				Envie uma mensagem
			</h2>

			<p className="text-sm text-muted-foreground mb-8 max-w-md leading-relaxed">
				Preencha o formulário e entraremos em contato o mais rápido
				possível.
			</p>

			<Form {...form}>
				<form className="space-y-7">
					<div className="grid md:grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="space-y-2">
									<FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
										Nome
									</FormLabel>
									<FormControl>
										<Input
											required
											placeholder="Seu nome completo"
											className="rounded-none border-b border-x-0 border-t-0 focus:border-primary transition-colors shadow-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="space-y-2">
									<FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
										Email
									</FormLabel>
									<FormControl>
										<Input
											required
											type="email"
											placeholder="seu@email.com"
											className="rounded-none border-b border-x-0 border-t-0 focus:border-primary transition-colors shadow-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
									Assunto
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Sobre o que quer falar?"
										required
										className="rounded-none border-b border-x-0 border-t-0 focus:border-primary transition-colors shadow-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
									Mensagem
								</FormLabel>
								<FormControl>
									<Textarea
										rows={6}
										placeholder="Escreva sua mensagem..."
										required
										className="rounded-none border resize-none focus:border-primary transition-colors shadow-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex items-start gap-3 pt-2">
						<input
							type="checkbox"
							id="contact-form"
							required
							className="mt-1 accent-primary"
						/>
						<label htmlFor="contact-form">
							<p className="text-xs text-muted-foreground leading-relaxed">
								Aceito receber comunicações e concordo com a
								política de privacidade.
							</p>
						</label>
					</div>

					<Button
						type="submit"
						size="lg"
						className="w-full rounded-none text-sm tracking-widest uppercase bg-primary hover:bg-primary/90 transition-colors"
					>
						Enviar mensagem
					</Button>
				</form>
			</Form>
		</motion.div>
	);
}
