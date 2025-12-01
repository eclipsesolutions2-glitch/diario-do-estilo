import type { UseFormReturn } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@workspace/ui/components/form";
import { Textarea } from "@workspace/ui/components/textarea";
import { cn } from "@workspace/ui/lib/utils";
import { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";

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