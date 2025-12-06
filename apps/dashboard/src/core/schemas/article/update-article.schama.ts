import { z } from "zod";
import { formatSlug } from "@/lib/formats/format-slug";

export const updateArticleSchema = z.object({
  title: z.string().min(3).max(80),
  slug: z
    .string()
    .min(3)
    .max(100)
    .refine((field) => formatSlug(field)),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(10),

  is_published: z.boolean(),
  is_featured: z.boolean(),

  cover_image: z.string().nullable(), //z.instanceof(File).optional().nullable(),
  // gallery_images: z.array(z.instanceof(File)).optional().nullable(),
});

export type UpdateArticleSchemaValues = z.infer<typeof updateArticleSchema>;
