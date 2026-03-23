import mongoose, { Schema, Document, Model } from "mongoose";

/* ---------------- TYPES ---------------- */
interface FAQI {
  id: string;
  question: string;
  answer: string;
}

interface PoojaDocument extends Document {
  title: string;
  slug: string;
  temple: string;
  location: string;

  price: number;
  discountPrice?: number;
  rating?: string;
  reviews : string;

  description?: string;
  aboutContent?: string;

  duration?: string;

  heroImage?: {
    image: string;
    alt: string;
  };

  metaData : {
     title : string;
     description : string;
  }
  , 
  schemaData : {
    title : string;
    description : string;
  }

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

    temple: { type: String, required: true },

    location: { type: String, required: true },

    reviews : {type : String, required : true},

    status: {
      type: String,
      required: true,
      enum: ["published", "draft"], //  important
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPrice: {
      type: Number,
      min: 0,
    },

    rating: {
      type: String,
    },

    description: { type: String },

    aboutContent: { type: String },

    duration: { type: String },

    metaData : {
       title : { type : String},
       description : {type : String}
    },

    schemaData : {
        title : {type : String},
        description  : {type : String},
    }
    ,

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
  { timestamps: true }
);

const PoojaModel: Model<PoojaDocument> =
  mongoose.models.Pooja ||
  mongoose.model<PoojaDocument>("Pooja", PoojaSchema);

export default PoojaModel;