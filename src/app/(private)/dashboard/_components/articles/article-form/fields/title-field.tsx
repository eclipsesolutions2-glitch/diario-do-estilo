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

export default function TitleField({
	form,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
}) {
	return (
		<FormField
			control={form.control}
			name="title"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Título</FormLabel>
					<FormControl>
						<Input placeholder="Título do artigo" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
