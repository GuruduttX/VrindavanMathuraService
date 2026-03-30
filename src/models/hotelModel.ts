import mongoose, { Schema } from "mongoose";
import {IHotel} from "@/types/hotelTypes"


const hotelSchema = new Schema<IHotel>({

  title: {
    type: String,
   
  },

  subcontent: {

    type: String,
    
  },

  slug : {

    type : String,
    
  },

  duration : {

    type : String,
    
  },

  rating: {
    
    type: Number,
    
  },

  reviews: {
    type: Number,
    default: 0
  },

  price: {
    type: Number,
   
  },

  category: {
    type: String,
   
  },

  host: {
    type: String,
  },

  about: {
    type: String,
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