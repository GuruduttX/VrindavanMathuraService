import mongoose, { Schema, Document, Model } from "mongoose";

/* ================= SUB TYPES ================= */

interface Itinerary {
  _id?: mongoose.Types.ObjectId;
  day: number;
  title: string;
  description: string;
}

interface FAQ {
  _id?: mongoose.Types.ObjectId;
  question: string;
  answer: string;
}

interface Duration {
  days: number;
  place: string;
}

interface Testimonial {
  name: string;
  description: string;
  rating: number;
}

interface BreakdownItem {
  days: number;
  place: string;
}

interface RouteSegment {
  from: string;
  to: string;
}

interface RouteType {
  source: string;
  destination: string;
  segments: RouteSegment[];
}

/* ================= MAIN INTERFACE ================= */

export interface ITourPackage extends Document {
  title: string;
  slug: string;
  category: string;
  price: number;
  rating: number;

  duration: string;
  status: string;

  days: number;
  nights: number;

  durationbreakdown: Duration[];

  destination: string;
  overview?: string;

  highlights: string[];
  itinerary: Itinerary[];

  inclusions: string[];
  exclusions: string[];

  faqs: FAQ[];
  policies: string[];

  // ✅ NEW FIELDS
  metaTitle: string;
  metaDescription: string;

  schemaTitle: string;
  schemaDescription: string;

  refund: string;
  cancel: string;
  confirmation: string;
  payment: string;

  heroImage?: string;
  images: string[];

  childImages: {
    image: string;
    alt: string;
  }[];

  testimonials: Testimonial[];

  documents: string[];

  routes: RouteType[];

  isTransferIncluded: boolean;
  isStayIncluded: boolean;
  isBreakfastIncluded: boolean;
  isSightseeingIncluded: boolean;

  isActive: boolean;
  isFeatured: boolean;

  createdAt: Date;
  updatedAt: Date;
}

/* ================= SCHEMA ================= */

const TourPackageSchema: Schema<ITourPackage> = new Schema(
  {
    title: { type: String, required: true, trim: true },

    slug: { type: String, required: true, unique: true },

    duration: { type: String, required: true },

    category: { type: String, required: true },

    price: { type: Number, required: true, min: 0 },

    rating: { type: Number, default: 0, min: 0, max: 5 },

    status: { type: String, required: true },

    days: { type: Number, required: true },
    nights: { type: Number, required: true },

    durationbreakdown: [
      {
        days: { type: Number, required: true },
        place: { type: String, required: true },
      },
    ],

    destination: { type: String, required: true, index: true },

    overview: { type: String },

    highlights: [{ type: String }],

    itinerary: [
      {
        day: Number,
        title: String,
        description: String,
      },
    ],

    inclusions: [{ type: String }],
    exclusions: [{ type: String }],

    faqs: [
      {
        question: String,
        answer: String,
      },
    ],

    policies: [{ type: String }],

    /* ===== NEW FIELDS ===== */

    metaTitle: { type: String },
    metaDescription: { type: String },

    schemaTitle: { type: String },
    schemaDescription: { type: String },

    refund: { type: String },
    cancel: { type: String },
    confirmation: { type: String },
    payment: { type: String },

    heroImage: { type: String },

    images: [{ type: String }],

    childImages: [
      {
        image: String,
        alt: String,
      },
    ],

    testimonials: [
      {
        name: String,
        description: String,
        rating: Number,
      },
    ],

    documents: [{ type: String }],

    routes: [
      {
        source: String,
        destination: String,
        segments: [
          {
            from: String,
            to: String,
          },
        ],
      },
    ],

    /* ===== FLAGS ===== */

    isTransferIncluded: { type: Boolean, default: false },
    isStayIncluded: { type: Boolean, default: false },
    isBreakfastIncluded: { type: Boolean, default: false },
    isSightseeingIncluded: { type: Boolean, default: false },

    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/* ================= MODEL ================= */

const TourPackageModel: Model<ITourPackage> =
  mongoose.models.Packages ||
  mongoose.model<ITourPackage>("Packages", TourPackageSchema);

export default TourPackageModel;