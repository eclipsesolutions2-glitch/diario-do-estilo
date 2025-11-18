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
import { cn } from "@/lib/utils";

export default function ExcerptField({
	form,
	className,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
	className?: React.ComponentProps<"div">["className"];
}) {
	return (
		<FormField
			control={form.control}
			name="excerpt"
			render={({ field }) => (
				<FormItem className={cn(className)}>
					<FormLabel>Resumo</FormLabel>
					<FormControl>
						<Textarea
							placeholder="Resumo do artigo"
							{...field}
							className="min-h-24 resize-none"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
