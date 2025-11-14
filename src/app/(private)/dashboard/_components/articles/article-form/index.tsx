"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { article } from "@/core/actions/article";
import {
	type CreateArticleSchemaValues,
	createArticleSchema,
} from "@/core/schemas/article/create-article.schema";
import ContentField from "./fields/content-field";
import CoverImageField from "./fields/cover-image-field";
import ExcerptField from "./fields/excerpt-field";
import FeaturedSwitch from "./fields/featured-switch";
import GalleryField from "./fields/gallery-field";
import PublishSwitch from "./fields/publish-switch";
import SlugField from "./fields/slug-field";
import TitleField from "./fields/title-field";

export function ArticleForm() {
	const form = useForm<CreateArticleSchemaValues>({
		resolver: zodResolver(createArticleSchema),
		defaultValues: {
			title: "",
			slug: "",
			excerpt: "",
			content: "",
			is_published: false,
			is_featured: false,
			cover_image: null,
			gallery_images: [],
		},
	});

	async function onSubmit(values: CreateArticleSchemaValues) {
		const res = await article.create(values);

		if (!res.success) {
			toast.error(res.error);
			return;
		}

		toast.success("✅ Artigo criado com sucesso!");
		form.reset();
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<TitleField form={form} />
				<SlugField form={form} />
				<ExcerptField form={form} />
				<ContentField form={form} />

				<div className="flex gap-4">
					<PublishSwitch form={form} />
					<FeaturedSwitch form={form} />
				</div>

				<CoverImageField form={form} />
				<GalleryField form={form} />

				<Button type="submit">Criar Artigo</Button>
			</form>
		</Form>
	);
}
