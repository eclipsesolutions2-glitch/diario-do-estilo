import type { UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schema";

export default function CoverImageField({
	form,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
}) {
	return (
		<FormField
			control={form.control}
			name="cover_image"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Capa</FormLabel>
					<FormControl>
						<input
							type="file"
							accept="image/*"
							onChange={(e) =>
								field.onChange(e.target.files?.[0] || null)
							}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
