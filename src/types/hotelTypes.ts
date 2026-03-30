import { Document } from "mongoose";

export interface IInclusion {
  freeWifi: boolean;
  breakfast: boolean;
  parking: boolean;
}


export interface IOffer {
  title?: string;
  discount?: number;
  validTill?: Date;
}


export interface IRatingScores {
  accuracy?: number;
  checkIn?: number;
  communication?: number;
  location?: number;
  value?: number;
  cleanliness?: number;
}


export interface IHighlights {
  hospitality?: number;
  greatLocation?: number;
  comfortStay?: number;
}


export interface IRatingSummary {
  reviewText: string;
  scores: IRatingScores;
  highlights: IHighlights;
}


export interface IHotel extends Document {
  title: string;
  subcontent: string;
  duration : string,
  slug : string
  category : string,
  rating: number;
  reviews: number;
  price: number;
  location: string;
  host: string;
  about: string;
  inclusion: IInclusion;
  offers: IOffer[];
  ratingSummary: IRatingSummary;
  status : string
  createdAt?: Date;
  updatedAt?: Date;
}