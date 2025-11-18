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

export default function ContentField({
	form,
	className,
}: {
	form: UseFormReturn<CreateArticleSchemaValues>;
	className?: React.ComponentProps<"div">["className"];
}) {
	return (
		<FormField
			control={form.control}
			name="content"
			render={({ field }) => (
				<FormItem className={cn(className)}>
					<FormLabel>Conteúdo</FormLabel>
					<FormControl>
						<Textarea
							placeholder="Conteúdo completo..."
							className="min-h-32 resize-none"
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
