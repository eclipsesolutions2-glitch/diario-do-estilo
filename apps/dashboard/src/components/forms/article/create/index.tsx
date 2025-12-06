"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@workspace/ui/components/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@workspace/ui/components/form";
import {
    createArticleSchema,
    CreateArticleSchemaValues,
} from "@/core/schemas/article/create-article.schama";
import { action } from "@/core/actions";
import { formatSlug } from "@/lib/formats/format-slug";
import { Input } from "@workspace/ui/components/input";
import TitleField from "./fields/title-field";
import ExcerptField from "./fields/excerpt-field";
import ContentField from "./fields/content-field";
import PublishSwitch from "./fields/publish-switch";
import FeaturedSwitch from "./fields/featured-switch";

interface ArticleFormProps {
    onFinishSubmit?: () => void;
}

export function ArticleForm({ onFinishSubmit }: ArticleFormProps) {
    const form = useForm<CreateArticleSchemaValues>({
        mode: "all",
        resolver: zodResolver(createArticleSchema),
        criteriaMode: "firstError",
        defaultValues: {
            title: "",
            content: "",
            excerpt: "",
            slug: "",
            is_featured: false,
            is_published: false,
            gallery_images: null,
            cover_image: null,
        },
    });

    async function onSubmit(values: CreateArticleSchemaValues) {
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

        if (values.cover_image) formData.append("cover_image", values.cover_image);

        if (values.gallery_images?.length) {
            values.gallery_images.forEach((file) => {
                formData.append("gallery_images[]", file);
            });
        }
        const res = await action.api.article.create(formData);

        if (!res.success) {
            toast.error(res.error);
            return;
        }

        toast.success("Artigo criado com sucesso!");
        form.reset();
        if (onFinishSubmit) {
            onFinishSubmit();
        }
    }

    const title = form.watch("title");

    useEffect(() => {
        if (!title) return;
        form.setValue("slug", formatSlug(title), { shouldValidate: true });
    }, [title, form]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-6">
                <div className="w-full space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TitleField form={form} />
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input placeholder="titulo-do-artigo" {...field} disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <ExcerptField form={form} className="col-span-1 md:col-span-2" />
                        <ContentField form={form} className="col-span-1 md:col-span-2" />

                        <div className="flex gap-4">
                            <PublishSwitch form={form} />
                            <FeaturedSwitch form={form} />
                        </div>
                    </div>

                    <Button type="submit" className="w-full mt-4 col-span-2">
                        Criar Artigo
                    </Button>
                </div>
                <div className="w-full flex flex-col gap-4">
                    {/* <CoverImageField form={form} />
					<GalleryField form={form} /> */}
                    <FormField
                        control={form.control}
                        name="cover_image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Imagem de capa</FormLabel>

                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            field.onChange(file || null);
                                        }}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="gallery_images"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Galeria de Imagens</FormLabel>

                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={(e) => {
                                            const files = e.target.files
                                                ? Array.from(e.target.files)
                                                : [];
                                            field.onChange(files);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />

                                <div>
                                    {Array.isArray(field.value) && field.value.length > 0 && (
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            {field.value.map((file) => (
                                                <div
                                                    key={file.name}
                                                    className="relative aspect-square rounded-md bg-accent"
                                                >
                                                    <Image
                                                        src={
                                                            URL.createObjectURL(file) ??
                                                            "/images/placeholder.svg"
                                                        }
                                                        alt={file.name}
                                                        fill
                                                        className="size-full rounded-[inherit] object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
}

/* <TitleField form={form} />
                <SlugField form={form} />
                <ExcerptField form={form} />
                <ContentField form={form} />

                <div className="flex gap-4">
                    <PublishSwitch form={form} />
                    <FeaturedSwitch form={form} />
                </div>

                <CoverImageField form={form} />
                <GalleryField form={form} />

                <Button type="submit">Criar Artigo</Button> */
