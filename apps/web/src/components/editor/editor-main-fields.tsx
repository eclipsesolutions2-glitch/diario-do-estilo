"use client";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { useEffect } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";
import { formatSlug } from "@/lib/formats/format-slug";

interface EditorMainFieldsProps {
	form: UseFormReturn<CreateArticleSchemaValues>;
	onTitleChange: (value: string) => void;
}

export function EditorMainFields({
	form,
	onTitleChange,
}: EditorMainFieldsProps) {
	const slug = form.watch("slug");
	const title = form.watch("title");

	useEffect(() => {
		if (!title) return;
		form.setValue("slug", formatSlug(title), { shouldValidate: true });
	}, [title, form]);

	return (
		<Card className="rounded-none border-border shadow-none">
			<CardContent className="p-6 md:p-8 space-y-6">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
								Título do Artigo{" "}
								<span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									onChange={(e) => {
										field.onChange(e);
										onTitleChange(e.target.value);
									}}
									placeholder="Digite um título impactante..."
									className="font-serif text-2xl md:text-3xl border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/30 h-auto py-2 shadow-none"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="slug"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
								URL (Slug){" "}
								<span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled
									placeholder="url-do-artigo"
									className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/30 h-auto py-2 shadow-none"
								/>
							</FormControl>
							{slug && (
								<FormDescription className="text-xs">
									URL: /articles/{slug}
								</FormDescription>
							)}
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem className="pt-4">
							<FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">
								Conteúdo <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									placeholder="Escreva o conteúdo do artigo aqui..."
									className="min-h-[300px] bg-secondary/5 p-6 text-lg leading-relaxed text-foreground/80 border border-dashed border-border rounded-none resize-y"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</CardContent>
		</Card>
	);
}
