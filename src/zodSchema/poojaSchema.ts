import FaqHandler from "@/components/Admin/CMS/FaqHandler";
import { z } from "zod";

const reviewValidationSchema = z.object({
  id: z.string().uuid("Invalid review ID format"), // Ensures crypto.randomUUID() format
  name: z.string().optional(),
  description: z
    .string()
     .optional(),
  rating: z.string().optional(),
});

const imageSchema = z.object({
  image: z.string().optional(),
  alt: z.string().optional()
});

const faqSchema = z.object({
  id: z.string().optional(),
  question: z.string().optional(),
  answer: z.string().optional()
})

const metaDataSchema = z.object({
  title: z.string().optional(),
  description :z.string().optional(),
})

const schemaDataSchema = z.object({
  title: z.string().optional(),
  description : z.string().optional()
})

export const poojaSchema = z
  .object({
    title: z.string().optional(),
    slug: z.string().optional(),

    temple: z.string().optional(),
    location: z.string().optional(),
    category: z.string(),

    price: z.coerce.number().min(0).optional(),
    discountPrice: z.coerce.number().optional(),

    rating: z.coerce.number().min(0).max(5).optional(),

    description: z.string().optional(),
    aboutContent: z.string().optional(),

    duration: z.string().optional(),

    availableDays: z.array(z.string()).optional(),

    heroImage: imageSchema,
    schemaData: schemaDataSchema,
    metaData: metaDataSchema,

    isActive: z.boolean().optional(),
    isFeatured: z.boolean().optional(),

    reviews: z.array(reviewValidationSchema).optional(),
    faqs: z.array(faqSchema).optional(),
    status: z.enum(["draft", "published"]),
  })
  .superRefine((data, ctx) => {
    if (data.status === "published") {
      //  Required fields for publish

      if (!data.title) {
        ctx.addIssue({
          path: ["title"],
          message: "Title is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.slug) {
        ctx.addIssue({
          path: ["slug"],
          message: "Slug is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.temple) {
        ctx.addIssue({
          path: ["temple"],
          message: "Temple is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.location) {
        ctx.addIssue({
          path: ["location"],
          message: "Location is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.price) {
        ctx.addIssue({
          path: ["price"],
          message: "Price is required",
          code: z.ZodIssueCode.custom,
        });
      }

    }
  });