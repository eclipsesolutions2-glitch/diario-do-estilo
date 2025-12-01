import type { UseFormReturn } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@workspace/ui/components/form";
import { Switch } from "@workspace/ui/components/switch";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";

export default function FeaturedSwitch({
    form,
}: {
    form: UseFormReturn<CreateArticleSchemaValues>;
}) {
    return (
        <FormField
            control={form.control}
            name="is_featured"
            render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                    <FormLabel>Destaque</FormLabel>
                    <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
}