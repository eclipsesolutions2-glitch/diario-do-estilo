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
