import mongoose, { Schema } from "mongoose";
import {IHotel} from "@/types/hotelTypes"


const hotelSchema = new Schema<IHotel>({

  title: {
    type: String,
    required: true,
    trim: true
  },

  subcontent: {
    type: String,
    required: true,
    trim: true
  },

  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },

  reviews: {
    type: Number,
    default: 0
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  location: {
    type: String,
    required: true,
    index: true,
    trim: true
  },

  host: {
    type: String,
    required: true,
    trim: true
  },

  about: {
    type: String,
    required: true
  },


  inclusion: {
    freeWifi: { type: Boolean, default: false },
    breakfast: { type: Boolean, default: false },
    parking: { type: Boolean, default: false }
  },

  
  offers: [
    {
      title: { type: String },
      discount: { type: Number },
      validTill: { type: Date }
    }
  ],

  ratingSummary: {
    reviewText: {
      type: String,
      required: true
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

  status : {
    type : String,
    required : true
  }

}, {
  timestamps: true
});



const Hotel = mongoose.models.Hotel || mongoose.model<IHotel>("Hotel", hotelSchema);

export default Hotel;