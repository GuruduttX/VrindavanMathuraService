import { ICar } from "@/types/carTypes";
import mongoose from "mongoose"
import { Schema } from "mongoose"

const carSchema = new Schema<ICar>({

    title: {
        type: String,
        required: true
    },

    basePrice: {
        type: Number,
        required: true
    },

    seats: {
        type: Number,
        required: true
    },

    cabType: {
        type: String,
        required: true
    },

    fuelType: {
        type: String,
        required: true
    },

    inclusions: [
        {
            id: {
                type: String,
                required: true
            },
            inclusion: {
                type: String,
                required: true
            }
        }
    ],

    exclusions: [
        {
            id: {
                type: String,
                required: true
            },
            exclusion: {
                type: String,
                required: true
            }
        }
    ],

    image : {
        type : String,
        required : true
    },

    alt : {
        type : String,
        required : true
    }

}, {timestamps : true})


const Car = mongoose.models.Car || mongoose.model<ICar>("Car", carSchema);

export default Car;