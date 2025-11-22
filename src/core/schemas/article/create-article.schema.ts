import { z } from "zod";
import { formatSlug } from "@/lib/formats/format-slug";

export const createArticleSchema = z.object({
	title: z.string().min(3).max(150),
	slug: z
		.string()
		.min(3)
		.refine((field) => formatSlug(field)),
	excerpt: z.string().max(500).optional(),
	content: z.string().min(10),

	is_published: z.coerce.boolean(),
	is_featured: z.coerce.boolean(),

	cover_image: z.instanceof(File).optional().nullable(),

	gallery_images: z.array(z.instanceof(File)).optional().nullable(),
});

export type CreateArticleSchemaValues = z.infer<typeof createArticleSchema>;
