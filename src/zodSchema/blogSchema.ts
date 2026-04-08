import { z } from "zod";

// sub schemas
const faqSchema = z.object({
  question: z.string().min(5),
  answer: z.string().min(5),
});

const metaSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
});

const schemaData = z.object({
  schemaTitle: z.string().min(3),
  schemaDescription: z.string().min(10),
});

export const blogSchema = z
  .object({
    title: z.string().optional(),
    category: z.string().optional(),
    slug: z.string().regex(/^[a-z0-9-]+$/).optional(),

    author: z.string().optional(),

    content: z.string().optional(),
    subContent: z.string().optional(),

    image: z.string().url().optional(),
    alt: z.string().optional(),

    meta: metaSchema.optional(),
    structuredData: schemaData.optional(),

    faqs: z.array(faqSchema).optional(),

    status: z.enum(["draft", "published"]),
  })
  .superRefine((data, ctx) => {
    if (data.status === "published") {
      // required fields for publish
      if (!data.title) {
        ctx.addIssue({
          path: ["title"],
          message: "Title is required when publishing",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.slug) {
        ctx.addIssue({
          path: ["slug"],
          message: "Slug is required when publishing",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.content || data.content.length < 20) {
        ctx.addIssue({
          path: ["content"],
          message: "Content must be at least 20 characters",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.image) {
        ctx.addIssue({
          path: ["image"],
          message: "Image is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.meta) {
        ctx.addIssue({
          path: ["meta"],
          message: "Meta is required",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });