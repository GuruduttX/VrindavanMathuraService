import { z } from "zod";

// sub schemas
const faqSchema = z.object({
  id : z.string(),
  question: z.string(),
  answer: z.string(),
});

const inclusionSchema = z.object({
  freeWifi: z.boolean().optional(),
  breakfast: z.boolean().optional(),
  parking: z.boolean().optional(),
});

const offerSchema = z.object({
  title: z.string().optional(),
  discount: z.number().optional(),
  validTill: z.coerce.date().optional(),
});

const ratingScores = z.object({
  accuracy: z.number().optional(),
  checkIn: z.number().optional(),
  communication: z.number().optional(),
  location: z.number().optional(),
  value: z.number().optional(),
  cleanliness: z.number().optional(),
});

const highlights = z.object({
  hospitality: z.number().optional(),
  greatLocation: z.number().optional(),
  comfortStay: z.number().optional(),
});

const ratingSummary = z.object({
  reviewText: z.string().optional(),
  scores: ratingScores.optional(),
  highlights: highlights.optional(),
});

const textItem = z.object({
  id : z.string().optional(),
  description: z.string().optional(),
});

export const hotelSchema = z
  .object({
    title: z.string().optional(),
    subcontent: z.string().optional(),
    duration: z.string().optional(),

    slug: z.string().optional(),

    category: z.string().optional(),

    rating: z.coerce.number().optional(),
    reviews: z.coerce.number().optional(),

    image: z.string().optional(),
    alt: z.string().optional(),

    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),

    schemaTitle: z.string().optional(),
    schemaDescription: z.string().optional(),

    price: z.coerce.number().optional(),
    location: z.string().optional(),
    host: z.string().optional(),
    about: z.string().optional(),

    quickInclusions: inclusionSchema.optional(),
    offers: z.array(offerSchema).optional(),

    faqs: z.array(faqSchema).optional(),

    inclusions: z.array(textItem).optional(),
    exclusions: z.array(textItem).optional(),

    ratingSummary: ratingSummary.optional(),

    status: z.enum(["draft", "published"]),
  })
  .superRefine((data, ctx) => {
    if (data.status === "published") {
      //Required fields for publish

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

      if (!data.price) {
        ctx.addIssue({
          path: ["price"],
          message: "Price is required",
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

      if (!data.image) {
        ctx.addIssue({
          path: ["image"],
          message: "Image is required",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });