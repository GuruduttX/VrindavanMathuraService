import { z } from "zod";

// reusable (make optional-friendly)
const textItem = z.object({
  description: z.string().optional(),
});

const itinerary = z.object({
  day: z.number().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});

const faq = z.object({
  question: z.string().optional(),
  answer: z.string().optional(),
});

const duration = z.object({
  days: z.number().optional(),
  place: z.string().optional(),
});

const testimonial = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  rating: z.coerce.number().min(1).max(5).optional(),
});

const childImage = z.object({
  image: z.string().url().optional(),
  alt: z.string().optional(),
});

const routeSegment = z.object({
  from: z.string().optional(),
  to: z.string().optional(),
});

const route = z.object({
  source: z.string().optional(),
  destination: z.string().optional(),
  segments: z.array(routeSegment).optional(),
});

export const tourPackageSchema = z
  .object({
    title: z.string().optional(),
    slug: z.string().optional(),

    category: z.string().optional(),

    price: z.coerce.number().min(0).optional(),
    rating: z.coerce.number().min(0).max(5).optional(),
    reviews: z.coerce.number().optional(),

    duration: z.string().optional(),
    status: z.enum(["draft", "published"]),

    days: z.number().optional(),
    nights: z.number().optional(),

    durationbreakdown: z.array(duration).optional(),

    destination: z.string().optional(),
    overview: z.string().optional(),

    highlights: z.array(textItem).optional(),
    itinerary: z.array(itinerary).optional(),

    inclusions: z.array(textItem).optional(),
    exclusions: z.array(textItem).optional(),

    knowBeforeYouGo: z.array(textItem).optional(),

    faqs: z.array(faq).optional(),

    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),

    schemaTitle: z.string().optional(),
    schemaDescription: z.string().optional(),

    refund: z.string().optional(),
    cancel: z.string().optional(),
    confirmation: z.string().optional(),
    payment: z.string().optional(),

    heroImage: z
      .object({
        image: z.string().url(),
        alt: z.string(),
      })
      .optional(),

    childImages: z.array(childImage).optional(),

    testimonials: z.array(testimonial).optional(),

    documents: z.array(textItem).optional(),

    routes: route.optional(),

    isTransferIncluded: z.boolean().optional(),
    isStayIncluded: z.boolean().optional(),
    isBreakfastIncluded: z.boolean().optional(),
    isSightseeingIncluded: z.boolean().optional(),

    availableSrc: z.array(z.string()).optional(),
  })
  
  .superRefine((data, ctx) => {
    if (data.status === "published") {
      // Required fields for publish



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

      if (!data.destination) {
        ctx.addIssue({
          path: ["destination"],
          message: "Destination is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.itinerary || data.itinerary.length === 0) {
        ctx.addIssue({
          path: ["itinerary"],
          message: "Itinerary is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.highlights || data.highlights.length === 0) {
        ctx.addIssue({
          path: ["highlights"],
          message: "Highlights required",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });