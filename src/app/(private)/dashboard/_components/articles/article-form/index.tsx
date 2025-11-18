"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
import TitleField from "./fields/title-field";

function generateSlug(value: string) {
	return value
		.normalize("NFD") // separa acentos
		.replace(/[\u0300-\u036f]/g, "") // remove acentos
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "") // remove chars estranhos
		.replace(/\s+/g, "-") // espaços -> hífens
		.replace(/-+/g, "-"); // hífens duplos
}

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

	const title = form.watch("title");

	useEffect(() => {
		if (!title) return;
		form.setValue("slug", generateSlug(title), { shouldValidate: true });
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
						<ExcerptField
							form={form}
							className="col-span-1 md:col-span-2"
						/>
						<ContentField
							form={form}
							className="col-span-1 md:col-span-2"
						/>

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
					<CoverImageField form={form} />
					<GalleryField form={form} />
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
