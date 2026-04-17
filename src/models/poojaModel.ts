import mongoose, { Schema, Document, Model } from "mongoose";
import { required } from "zod/mini";

/* ---------------- TYPES ---------------- */
interface FAQI {
  id: string;
  question: string;
  answer: string;
}

interface IReview {
  id: string;
  name: string;
  description: string;
  rating: string;
}
interface PoojaDocument extends Document {
  title: string;
  slug: string;
  temple: string;
  location: string;
  category: string;

  price: number;
  discountPrice?: number;
  rating?: string;
  reviews?: IReview[];

  description?: string;
  aboutContent?: string;

  benefits?: string[];
  availableDays?: string[];
  images?: string[];

  duration?: string;

  heroImage?: {
    image: string;
    alt: string;
  };

  metaData: {
    title: string;
    description: string;
  };
  schemaData: {
    title: string;
    description: string;
  };

  status: string;
  faqs: FAQI[];

  createdAt: Date;
  updatedAt: Date;
}

/* SCHEMA */
const PoojaSchema: Schema<PoojaDocument> = new Schema(
  {
    title: { type: String, required: true },

    slug: { type: String, required: true, unique: true },

    temple: { type: String, },

    location: { type: String },

    category: { type: String },

   
    reviews: [
      {
        id: { type: String },
        name: { type: String },
        description: { type: String },
        rating: { type: String },
      },
    ],

    status: {
      type: String,
      required: true,
      enum: ["published", "draft"], //  important
    },

    price: {
      type: Number,
      min: 0,
    },

    discountPrice: {
      type: Number,
      min: 0,
    },

    rating: {
      type: Number,
    },

    description: { type: String },

    aboutContent: { type: String },

    duration: { type: String },

    metaData: {
      title: { type: String },
      description: { type: String },
    },

    schemaData: {
      title: { type: String },
      description: { type: String },
    },
    faqs: [
      {
        id: { type: String },
        question: { type: String },
        answer: { type: String },
      },
    ],

    heroImage: {
      image: { type: String },
      alt: { type: String },
    },
  },
  { timestamps: true },
);

const PoojaModel: Model<PoojaDocument> =
  mongoose.models.Pooja ||
  mongoose.model<PoojaDocument>("Pooja", PoojaSchema);

export default PoojaModel;