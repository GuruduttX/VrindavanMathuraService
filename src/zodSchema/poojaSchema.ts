import { z } from "zod";

export const poojaSchema = z
  .object({
    title: z.string().min(3).optional(),
    slug: z.string().regex(/^[a-z0-9-]+$/).optional(),

    temple: z.string().optional(),
    location: z.string().optional(),

    price: z.coerce.number().min(0).optional(),
    discountPrice: z.coerce.number().min(0).optional(),

    ratings: z.coerce.number().min(0).max(5).optional(),

    description: z.string().optional(),
    aboutContent: z.string().optional(),

    duration: z.string().optional(),

    benefits: z.array(z.string()).optional(),
    availableDays: z.array(z.string()).optional(),

    images: z.array(z.string().url()).optional(),

    isActive: z.boolean().optional(),
    isFeatured: z.boolean().optional(),

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

      if (!data.images || data.images.length === 0) {
        ctx.addIssue({
          path: ["images"],
          message: "At least one image is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.benefits || data.benefits.length === 0) {
        ctx.addIssue({
          path: ["benefits"],
          message: "Benefits are required",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });