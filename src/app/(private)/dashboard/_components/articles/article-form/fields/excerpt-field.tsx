import type { UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schema";

export default function ExcerptField({
	form,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
}) {
	return (
		<FormField
			control={form.control}
			name="excerpt"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Resumo</FormLabel>
					<FormControl>
						<Textarea placeholder="Resumo do artigo" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
