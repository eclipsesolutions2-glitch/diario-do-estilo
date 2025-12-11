"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@workspace/ui/components/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type CreateArticleSchemaValues,
	createArticleSchema,
} from "@/core/schemas/article/create-article.schama";
import { formatSlug } from "@/lib/formats/format-slug";
import { EditorHeader } from "../editor/editor-header";
import { EditorMainFields } from "../editor/editor-main-fields";
import { EditorSidebar } from "../editor/editor-sidebar";

export function EditorForm() {
	const form = useForm({
		resolver: zodResolver(createArticleSchema),
		defaultValues: {
			is_published: false,
			is_featured: false,
			title: "",
			slug: "",
			excerpt: "",
			content: "",
			cover_image: null,
			gallery_images: null,
		},
	});

	const isPublished = form.watch("is_published");

	const handleTitleChange = (value: string) => {
		form.setValue("title", value);
		const currentSlug = form.getValues("slug");
		if (!currentSlug) {
			form.setValue("slug", formatSlug(value));
		}
	};

	const onSubmit = async (data: CreateArticleSchemaValues) => {
		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("slug", data.slug);
		if (data.excerpt) formData.append("excerpt", data.excerpt);
		formData.append("content", data.content);

		if (data.is_published)
			formData.append(
				"is_published",
				data.is_published !== null ? String(data.is_published) : "",
			);
		if (data.is_featured)
			formData.append(
				"is_featured",
				data.is_featured !== null ? String(data.is_featured) : "",
			);

		if (data.cover_image) formData.append("cover_image", data.cover_image);

		if (data.gallery_images?.length) {
			data.gallery_images.forEach((file) => {
				formData.append("gallery_images[]", file);
			});
		}
		const result = await action.api.article.create(formData);
		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		form.reset();
	};

	const handleSaveDraft = () => {
		form.setValue("is_published", false);
		form.handleSubmit(onSubmit)();
	};

	return (
		<div className="container m-auto py-12">
			<EditorHeader
				onSaveDraft={handleSaveDraft}
				onPublish={form.handleSubmit(onSubmit)}
				isPublished={isPublished}
			/>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<EditorMainFields
								form={form}
								onTitleChange={handleTitleChange}
							/>
						</div>

						<div className="lg:col-span-1">
							<EditorSidebar form={form} />
						</div>
					</div>
				</form>
			</Form>
		</div>
	);
}
