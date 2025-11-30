"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@workspace/ui/components/button";
import { DialogClose, DialogFooter } from "@workspace/ui/components/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import type { Category } from "@/core/schemas/category";
import {
    type UpdateCategorySchemaValues,
    updateCategorySchema,
} from "@/core/schemas/category/update-category.schema";
import { action } from "@/core/actions";

interface UpdateCategoryFormProps {
    defaultValues: Category;
    onFinishSumit?: () => void;
}

export function UpdateCategoryForm({
    defaultValues,
    onFinishSumit,
}: UpdateCategoryFormProps) {
    const form = useForm<UpdateCategorySchemaValues>({
        mode: "all",
        criteriaMode: "firstError",
        resolver: zodResolver(updateCategorySchema),
        defaultValues: {
            name: defaultValues.name ?? "",
            description: defaultValues.description ?? "",
        },
    });

    const onSubmit = async (data: UpdateCategorySchemaValues) => {
        const result = await action.api.category.update({
            slug: defaultValues.slug,
            name: data.name,
            description: data.description
        });
        if (!result.success) {
            toast.error(result.error);
            return;
        }

        toast.success(result.message);
        form.reset();
        if (onFinishSumit) {
            onFinishSumit();
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Designação</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nome da categoria"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="min-h-32 resize-none"
                                    placeholder="Descreva brevemente a categoria..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit" className="text-base font-medium">
                        Guardar Alterações
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
}
