import type { UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schema";

export default function GalleryField({
	form,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
}) {
	return (
		<FormField
			control={form.control}
			name="gallery_images"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Galeria (várias imagens)</FormLabel>
					<FormControl>
						<input
							type="file"
							accept="image/*"
							multiple
							onChange={(e) =>
								field.onChange(Array.from(e.target.files || []))
							}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
