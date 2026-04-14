import { Document } from "mongoose";

export interface ITaxiInclusion {
  inclusion?: string;
}

export interface ITaxiExclusion {
  exclusion?: string;
}

export type CabType = "SUV" | "Sedan" | "Hatchback" | "TempoTraveller";

export type FuelType = "Petrol" | "Diesel" | "Electric" | "CNG";

export interface ITaxi extends Document {
  title?: string;

  basePrice?: number;
  seats?: number;

  cabType?: CabType;
  fuelType?: FuelType;

  status: "draft" | "published";

  inclusions?: ITaxiInclusion[];
  exclusions?: ITaxiExclusion[];

  image?: string;
  alt?: string;

  createdAt?: Date;
  updatedAt?: Date;
}