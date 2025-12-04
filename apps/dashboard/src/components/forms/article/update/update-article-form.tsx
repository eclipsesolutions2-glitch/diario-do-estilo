import { action } from "@/core/actions";
import { Article } from "@/core/schemas/article";
import { updateArticleSchema, UpdateArticleSchemaValues } from "@/core/schemas/article/update-article.schama";
import { formatSlug } from "@/lib/formats/format-slug";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Switch } from "@workspace/ui/components/switch";
import { Textarea } from "@workspace/ui/components/textarea";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface UpdateArticleFormProps {
    defaultValues: Article;
    onFinishSumit: () => void;
}

export function UpdateArticleForm({
    defaultValues,
    onFinishSumit,
}: UpdateArticleFormProps) {
    const form = useForm<UpdateArticleSchemaValues>({
        mode: "all",
        resolver: zodResolver(updateArticleSchema),
        criteriaMode: "firstError",
        defaultValues: {
            title: defaultValues.title || "",
            content: defaultValues.content || "",
            excerpt: defaultValues.excerpt || "",
            slug: defaultValues.slug || "",
            is_featured: defaultValues.is_featured || false,
            is_published: defaultValues.is_published || false,
            cover_image: defaultValues.cover_image || null,
        },
    });

    const title = form.watch("title");

    useEffect(() => {
        if (!title) return;
        form.setValue("slug", formatSlug(title), { shouldValidate: true });
    }, [title, form]);

    async function onSubmit(values: UpdateArticleSchemaValues) {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("slug", values.slug);
        if (values.excerpt) formData.append("excerpt", values.excerpt);
        formData.append("content", values.content);

        if (values.is_published)
            formData.append(
                "is_published",
                values.is_published !== null ? String(values.is_published) : "",
            );
        if (values.is_featured)
            formData.append(
                "is_featured",
                values.is_featured !== null ? String(values.is_featured) : "",
            );

        /* if (values.cover_image)
            formData.append("cover_image", values.cover_image); */

        /* if (values.gallery_images?.length) {
            values.gallery_images.forEach((file) => {
                formData.append("gallery_images[]", file);
            });
        } */
        const result = await action.api.article.update(values.slug, formData);

        if (!result.success) {
            toast.error(result.error);
            return;
        }

        toast.success(result.message);
        form.reset();
        if (onFinishSumit) {
            onFinishSumit();
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-6">
                <div className="w-full space-y-4">
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
                    <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Slug</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="titulo-do-artigo"
                                        {...field}
                                        disabled
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="excerpt"
                        render={({ field }) => (
                            <FormItem>
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

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
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

                    <Button type="submit" className="w-full mt-4 col-span-2">
                        Actualizar Artigo
                    </Button>
                    {/* <pre>{JSON.stringify(defaultValues, null, 2)}</pre> */}
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium text-neutral-700">
                            Imagem de Capa
                        </span>
                        <div className="relative h-32 overflow-hidden w-full rounded-md border">
                            <Image
                                src={defaultValues.cover_image ?? "/images/placeholder.svg"}
                                alt="cover"
                                fill
                                className="object-cover "
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="is_published"
                            render={({ field }) => (
                                <FormItem className="flex items-center gap-2">
                                    <FormLabel>Publicar</FormLabel>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
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
                    </div>
                </div>
            </form>
        </Form>
    );
}