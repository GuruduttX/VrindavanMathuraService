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
  },

  location : {
    type : String
  },

  category: {
    type: String,
    
  },

  duration: {
    type: String,
    
  },

  price: {
    type: Number,
  
    min: 0
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
    default : 0
  },

  reviews: {
    type: Number,
    default: 0,
   
  },

  host: {
    type: String,
    
  },

  about: {
    type: String,
   
  },

  image: {
    type: String,
   
  },

  alt: {
    type: String,
    
  },

  faqs: [

    {
      id: {
        type: String,
       
      },

      question: {
        type: String,
      },

      answer: {
        type: String,
      }
    }

  ],


  ratingSummary: {
    reviewText: {
      type: String
    },

    scores: {
      accuracy: { type: Number, min: 0, max: 5 , default : 0},
      checkIn: { type: Number, min: 0, max: 5 , default : 0 },
      communication: { type: Number, min: 0, max: 5 , default : 0 },
      location: { type: Number, min: 0, max: 5 , default : 0},
      value: { type: Number, min: 0, max: 5 , default : 0 },
      cleanliness: { type: Number, min: 0, max: 5 , default : 0 }
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
  },

  quickInclusions : {
     freeWifi: {type : Boolean, default : false }, 
     breakfast: {type : Boolean, default : false},
     parking: {type : Boolean, default : false}
  }
  ,
  inclusions : [
     {
       id : {type : String},
       description : {type : String}
     }
  ],
  exclusions : [
       {
       id : {type : String},
       description : {type : String}
     }
  ]

},

  {
    timestamps: true
  }
  
);

const Hotel = mongoose.models.Hotel || mongoose.model<IHotel>("Hotel", hotelSchema);

export default Hotel;