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

export default function ContentField({
	form,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
}) {
	return (
		<FormField
			control={form.control}
			name="content"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Conteúdo</FormLabel>
					<FormControl>
						<Textarea
							className="min-h-40"
							placeholder="Conteúdo completo..."
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
