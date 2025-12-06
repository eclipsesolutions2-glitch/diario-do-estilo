import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import type { UseFormReturn } from "react-hook-form";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";

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
