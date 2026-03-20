import { Document } from "mongoose";

export interface ICarInclusion {
  id: number;
  inclusion: string;
}

export interface ICarExclusion {
  id: number;
  exclusion: string;
}

export type CabType = "SUV" | "Sedan" | "Hatchback" | "TempoTraveller";
export type FuelType = "Petrol" | "Diesel" | "Electric" | "CNG";

export interface ICar extends Document {

  title: string;
  basePrice: number;
  seats: number;
  cabType: CabType;
  fuelType: FuelType;
  inclusions: ICarInclusion[];
  exclusions: ICarExclusion[];
  image : String;
  alt : String;
  createdAt?: Date;
  updatedAt?: Date;

}