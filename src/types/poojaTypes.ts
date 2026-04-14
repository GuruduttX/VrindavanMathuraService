import { Document } from "mongoose";

export interface IPooja extends Document {
  title?: string;
  slug?: string;

  temple?: string;
  location?: string;

  price?: number;
  discountPrice?: number;
  ratings?: number;

  description?: string;
  aboutContent?: string;

  duration?: string;

  benefits?: string[];

  availableDays?: string[];

  images?: string[];

  isActive?: boolean;
  isFeatured?: boolean;

  status: "draft" | "published"; //  only required field

  createdAt?: Date;
  updatedAt?: Date;
}