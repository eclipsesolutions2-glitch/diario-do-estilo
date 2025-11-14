import type { UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schema";

export default function SlugField({
	form,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
}) {
	const title = form.watch("title");
	form.setValue(
		"slug",
		title.trim().normalize().split(" ").join("-").toLocaleLowerCase(),
	);
	return (
		<FormField
			control={form.control}
			name="slug"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Slug</FormLabel>
					<FormControl>
						<Input
							placeholder="titulo-do-artigo"
							{...field}
							disabled
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
