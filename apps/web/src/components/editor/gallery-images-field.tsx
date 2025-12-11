"use client";

import { Button } from "@workspace/ui/components/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";

interface GalleryImagesFieldProps {
	form: UseFormReturn<CreateArticleSchemaValues>;
}

export function GalleryImagesField({ form }: GalleryImagesFieldProps) {
	const [previews, setPreviews] = useState<string[]>([]);

	const handleUpload = (files: File[]) => {
		if (files.length) {
			form.setValue("gallery_images", files);
			const newPreviews: string[] = [];

			files.forEach((file) => {
				const reader = new FileReader();
				reader.onloadend = () => {
					newPreviews.push(reader.result as string);
					if (newPreviews.length === files.length) {
						setPreviews(newPreviews);
					}
				};
				reader.readAsDataURL(file);
			});
		}
	};

	const handleRemove = (index: number) => {
		const newPreviews = previews.filter((_, i) => i !== index);
		setPreviews(newPreviews);

		const currentFiles = form.getValues("gallery_images");
		if (currentFiles) {
			const newFiles = Array.from(currentFiles).filter(
				(_, i) => i !== index,
			);
			form.setValue(
				"gallery_images",
				newFiles.length > 0 ? newFiles : null,
			);
		}
	};

	return (
		<FormField
			control={form.control}
			name="gallery_images"
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
						Galeria de Imagens
					</FormLabel>
					<FormControl>
						<div className="space-y-4">
							{previews.length > 0 && (
								<div className="grid grid-cols-3 gap-4">
									{previews.map((preview, idx) => (
										<div
											key={`${idx + 2} - `}
											className="relative aspect-square group"
										>
											<Image
												src={preview}
												alt={`Gallery ${idx + 1}`}
												fill
												className="w-full h-full object-cover"
											/>
											<Button
												type="button"
												variant="destructive"
												size="icon"
												className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
												onClick={() =>
													handleRemove(idx)
												}
											>
												<X className="w-3 h-3" />
											</Button>
										</div>
									))}
								</div>
							)}

							<label className="aspect-video bg-secondary/20 flex items-center justify-center cursor-pointer hover:bg-secondary/30 transition-colors group border border-dashed border-border">
								<input
									type="file"
									accept="image/*"
									multiple
									className="hidden"
									onChange={(e) => {
										const files = Array.from(
											e.target.files || [],
										);
										if (files.length) {
											handleUpload(files);
											field.onChange(files);
										}
									}}
								/>
								<div className="text-center">
									<ImageIcon className="w-6 h-6 mx-auto mb-2 text-muted-foreground group-hover:text-foreground transition-colors" />
									<span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
										Adicionar imagens à galeria
									</span>
								</div>
							</label>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
