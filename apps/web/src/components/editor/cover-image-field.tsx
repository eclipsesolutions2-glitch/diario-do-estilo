"use client";

import { Button } from "@workspace/ui/components/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";

interface CoverImageFieldProps {
	form: UseFormReturn<CreateArticleSchemaValues>;
}

export function CoverImageField({ form }: CoverImageFieldProps) {
	const [preview, setPreview] = useState<string | null>(null);

	const handleUpload = (file: File | null) => {
		if (file) {
			form.setValue("cover_image", file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleRemove = () => {
		setPreview(null);
		form.setValue("cover_image", null);
	};

	return (
		<FormField
			control={form.control}
			name="cover_image"
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
						Imagem de Capa
					</FormLabel>
					<FormControl>
						{preview ? (
							<div className="relative aspect-video bg-secondary/20 overflow-hidden group">
								<Image
									src={preview}
									alt="Preview"
									fill
									className="w-full h-full object-cover"
								/>
								<Button
									type="button"
									variant="destructive"
									size="icon"
									className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
									onClick={handleRemove}
								>
									<X className="w-4 h-4" />
								</Button>
							</div>
						) : (
							<label className="aspect-video bg-secondary/20 flex items-center justify-center cursor-pointer hover:bg-secondary/30 transition-colors group border border-dashed border-border">
								<input
									type="file"
									accept="image/*"
									className="hidden"
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (file) {
											handleUpload(file);
											field.onChange(file);
										}
									}}
								/>
								<div className="text-center">
									<Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-foreground transition-colors" />
									<span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
										Clique para fazer upload
									</span>
								</div>
							</label>
						)}
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
