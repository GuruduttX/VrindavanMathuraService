import { ITaxi } from "@/types/taxiTypes";
import mongoose, { Schema } from "mongoose";

const taxiSchema = new Schema<ITaxi>(
  {
    title: {
      type: String,
      required: true,
    },

    basePrice: {
      type: Number,
      required: true,
    },

    seats: {
      type: Number,
      required: true,
    },

    cabType: {
      type: String,
      enum: ["SUV", "Sedan", "Hatchback", "TempoTraveller"],
      required: true,
    },

    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "CNG"], 
      required: true,
    },

    inclusions: [
      {
        id: {
          type: String, 
          required: true,
        },
        inclusion: {
          type: String,
          required: true,
        },
      },
    ],

    exclusions: [
      {
        id: {
          type: String,
          required: true,
        },
        exclusion: {
          type: String,
          required: true,
        },
      },
    ],

    image: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Taxi =
  mongoose.models.Taxi || mongoose.model<ITaxi>("Taxi", taxiSchema);

export default Taxi;