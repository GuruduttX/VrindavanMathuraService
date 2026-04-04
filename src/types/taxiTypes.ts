import { Document } from "mongoose";


export interface ITaxiInclusion {
  id: string;
  inclusion: string;
}


export interface ITaxiExclusion {
  id: string;
  exclusion: string;
}


export type CabType = "SUV" | "Sedan" | "Hatchback" | "TempoTraveller";

export type FuelType = "Petrol" | "Diesel" | "Electric" | "CNG";


export interface ITaxi extends Document {
  title: string;
  basePrice: number;
  seats: number;
  cabType: CabType;
  fuelType: FuelType;
  status : String;

  inclusions: ITaxiInclusion[];
  exclusions: ITaxiExclusion[];

  image: string;  
  alt: string;

  createdAt?: Date;
  updatedAt?: Date;
}