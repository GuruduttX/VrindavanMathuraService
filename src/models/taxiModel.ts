import { ITaxi } from "@/types/taxiTypes";
import mongoose, { Schema } from "mongoose";

const taxiSchema = new Schema<ITaxi>(
  {
    title: {
      type: String,
    },

    basePrice: {
      type: Number,
    },

    seats: {
      type: Number,
    },

    cabType: {
      type: String,
      enum: [
        "SUV",
        "Sedan",
        "Hatchback",
        "Tempo Traveller",
        "Luxury",
        "Electric",
      ],
    },

    status: {
      type: String,
      enum: ["published", "draft"],
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "CNG"],
    },

    inclusions: [
      {
        id: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],

    exclusions: [
      {
        id: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],

    image: {
      type: String,
    },

    alt: {
      type: String,
    },
  },
  { timestamps: true },
);

const Taxi =
  mongoose.models.Taxi || mongoose.model<ITaxi>("Taxi", taxiSchema);

export default Taxi;