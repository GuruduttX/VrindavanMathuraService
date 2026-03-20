import mongoose, { Schema, Document, Model } from "mongoose";


interface PoojaDocument extends Document {
  title: string;
  slug: string;
  temple: string;
  location: string;

  price: number;
  discountPrice?: number;
  ratings : number;

  description?: string;
  aboutContent?: string;

  duration?: string;

  benefits: string[];

  availableDays: string[];

  images: string[];

  isActive: boolean;
  isFeatured: boolean;

  createdAt: Date;
  updatedAt: Date;
}




const PoojaSchema: Schema<PoojaDocument> = new Schema(
  {
    title: { type: String, required: true },

    slug: { type: String, required: true, unique: true },

    temple: { type: String, required: true },

    location: { type: String, required: true },

  
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPrice: {
      type: Number,
      min: 0,
    },
    ratings: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
    ,

    description: { type: String },

    aboutContent: { type: String },

    duration: { type: String },

    benefits: [{ type: String }],

    availableDays: [{ type: String }],
    

  
    images: [{ type: String }],

    isActive: { type: Boolean, default: true },

    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);




const PoojaModel: Model<PoojaDocument> =
  mongoose.models.Pooja ||
  mongoose.model<PoojaDocument>("Pooja", PoojaSchema);

export default PoojaModel;