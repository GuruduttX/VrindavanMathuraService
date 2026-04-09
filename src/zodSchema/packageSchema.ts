import { z } from "zod";

// reusable
const textItem = z.object({
  description: z.string().min(3),
});

const itinerary = z.object({
  day: z.number().min(1),
  title: z.string().min(3),
  description: z.string().min(5),
});

const faq = z.object({
  question: z.string().min(5),
  answer: z.string().min(5),
});

const duration = z.object({
  days: z.number().min(1),
  place: z.string().min(2),
});

const testimonial = z.object({
  name: z.string().min(2),
  description: z.string().min(5),
  rating: z.number().min(1).max(5),
});

const childImage = z.object({
  image: z.string().url(),
  alt: z.string(),
});

const routeSegment = z.object({
  from: z.string(),
  to: z.string(),
});

const route = z.object({
  source: z.string(),
  destination: z.string(),
  segments: z.array(routeSegment),
});

export const tourPackageSchema = z.object({
  title: z.string().min(3),
  slug: z.string().regex(/^[a-z0-9-]+$/),

  category: z.string(),

  price: z.coerce.number().min(0),
  rating: z.coerce.number().min(0).max(5).optional(),
  reviews: z.coerce.number().optional(),

  duration: z.string(),
  status: z.enum(["draft", "published"]),

  days: z.number(),
  nights: z.number(),

  durationbreakdown: z.array(duration),

  destination: z.string(),
  overview: z.string().optional(),

  highlights: z.array(textItem),
  itinerary: z.array(itinerary),

  inclusions: z.array(textItem),
  exclusions: z.array(textItem),

  knowBeforeYouGo: z.array(textItem).optional(),

  faqs: z.array(faq),

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

  childImages: z.array(childImage),

  testimonials: z.array(testimonial),

  documents: z.array(textItem),

  routes: route,

  isTransferIncluded: z.boolean(),
  isStayIncluded: z.boolean(),
  isBreakfastIncluded: z.boolean(),
  isSightseeingIncluded: z.boolean(),

  availableSrc: z.array(z.string()),
});