import mongoose, { Schema } from "mongoose";
import { IHotel } from "@/types/hotelTypes";

const hotelSchema = new Schema<IHotel>({

  title: {
    type: String,
    trim: true,
    required: true
  },

  slug: {
    type: String,
    unique: true,
    required: true
  },

  subcontent: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  duration: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },

  reviews: {
    type: Number,
    default: 0,
    required: true
  },

  host: {
    type: String,
    required: true
  },

  about: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true
  },

  alt: {
    type: String,
    required: true
  },

  faqs: [

    {
      id: {
        type: String,
        required: true
      },

      question: {
        type: String,
        required: true
      },

      answer: {
        type: String,
        required: true
      }
    }

  ],


  ratingSummary: {
    reviewText: {
      type: String
    },

    scores: {
      accuracy: { type: Number, min: 0, max: 5 },
      checkIn: { type: Number, min: 0, max: 5 },
      communication: { type: Number, min: 0, max: 5 },
      location: { type: Number, min: 0, max: 5 },
      value: { type: Number, min: 0, max: 5 },
      cleanliness: { type: Number, min: 0, max: 5 }
    },

    highlights: {
      hospitality: { type: Number, default: 0 },
      greatLocation: { type: Number, default: 0 },
      comfortStay: { type: Number, default: 0 }
    }

  },

  metaTitle: {
    type: String
  },

  metaDescription: {
    type: String
  },

  schemaTitle: {
    type: String
  },

  schemaDescription: {
    type: String
  },

  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft"
  }

},

  {
    timestamps: true
  }
  
);

const Hotel = mongoose.models.Hotel || mongoose.model<IHotel>("Hotel", hotelSchema);

export default Hotel;