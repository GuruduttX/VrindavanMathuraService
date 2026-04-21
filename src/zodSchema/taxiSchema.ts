import { z } from "zod";

// sub schemas
const inclusionSchema = z.object({
  id : z.string().optional(),
  description: z.string().optional(),
});

const exclusionSchema = z.object({
  id : z.string().optional(),
  description: z.string().optional(),
});

// enums
const cabTypeEnum = z.enum([
  "SUV",
  "Sedan",
  "Hatchback",
  "TempoTraveller",
]);

const fuelTypeEnum = z.enum([
  "Petrol",
  "Diesel",
  "Electric",
  "CNG",
]);

export const taxiSchema = z
  .object({
    title: z.string().optional(),

    basePrice: z.coerce.number().min(0).optional(),
    seats: z.number().min(1).optional(),

    cabType: cabTypeEnum.optional(),
    fuelType: fuelTypeEnum.optional(),

    status: z.enum(["draft", "published"]),

    inclusions: z.array(inclusionSchema).optional(),
    exclusions: z.array(exclusionSchema).optional(),

    image: z.string().url().optional(),
    alt: z.string().optional(),
  }) .superRefine((data, ctx) => {
    if (data.status === "published") {
      // Required fields for publish

      if (!data.title) {
        ctx.addIssue({
          path: ["title"],
          message: "Title is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.basePrice) {
        ctx.addIssue({
          path: ["basePrice"],
          message: "Base price is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.seats) {
        ctx.addIssue({
          path: ["seats"],
          message: "Seats are required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.cabType) {
        ctx.addIssue({
          path: ["cabType"],
          message: "Cab type is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.fuelType) {
        ctx.addIssue({
          path: ["fuelType"],
          message: "Fuel type is required",
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