import { Document } from "mongoose";

export interface IFAQ {
  question?: string;
  answer?: string;
}

export interface IInclusion {
  freeWifi?: boolean;
  breakfast?: boolean;
  parking?: boolean;
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
  reviewText?: string;
  scores?: IRatingScores;
  highlights?: IHighlights;
}

export interface IInc {
  description?: string;
}

export interface IExc {
  description?: string;
}

export interface IHotel extends Document {
  title?: string;
  subcontent?: string;
  duration?: string;

  slug?: string;
  category?: string;

  rating?: number;
  reviews?: number;

  image?: string;
  alt?: string;

  metaTitle?: string;
  metaDescription?: string;

  schemaTitle?: string;
  schemaDescription?: string;

  price?: number;
  location?: string;
  host?: string;
  about?: string;

  quickInclusions?: IInclusion;

  offers?: IOffer[];
  faqs?: IFAQ[];

  inclusions?: IInc[];
  exclusions?: IExc[];

  ratingSummary?: IRatingSummary;

  status: "draft" | "published"; // only required field

  createdAt?: Date;
  updatedAt?: Date;
}