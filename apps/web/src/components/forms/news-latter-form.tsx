"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type SubscribeNewsLetterSchemaValues,
	subscribeNewsLetterSchema,
} from "@/core/schemas/newsletter.schama";

export function NewsletterForm() {
	const form = useForm<SubscribeNewsLetterSchemaValues>({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(subscribeNewsLetterSchema),
		defaultValues: { name: "", email: "" },
	});

	const onSubmit = async (data: SubscribeNewsLetterSchemaValues) => {
		const result = await action.api.newsletter.subscribe(data);
		if (!result.success) {
			toast.error(result.error);
			return;
		}
		toast.success(result.message);

		form.reset();
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<Form {...form}>
				<form
					className="space-y-7"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="grid gap-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="space-y-2">
									<FormLabel className="text-sm uppercase tracking-wide text-muted-foreground">
										Nome
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="Seu nome completo"
											required
											className="h-12 rounded-none"
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
									<FormLabel className="text-sm uppercase tracking-wide text-muted-foreground">
										Email
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="email"
											placeholder="seu@email.com"
											required
											className="h-12 rounded-none"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex items-start gap-3 pt-2">
						<input
							type="checkbox"
							id="newsletter-form"
							required
							className="mt-1 accent-primary"
						/>
						<label htmlFor="newsletter-form">
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
						Assinar Newsletter
					</Button>
				</form>
			</Form>
		</motion.div>
	);
}
