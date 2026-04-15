import { Document } from "mongoose";

export interface IPooja extends Document {
  title?: string;
  slug?: string;

  temple?: string;
  location?: string;
  category?: string,

  price?: number;
  discountPrice?: number;
  ratings?: number;

  description?: string;
  aboutContent?: string;

  duration?: string;

  benefits?: string[];

  availableDays?: string[];

  heroImage?: {
    image: string,
    alt: string
  };

  reviews: [
    {
      id: string,
      name: string,
      description: string,
      rating: string
    }
  ]

  isActive?: boolean;
  isFeatured?: boolean;

  status: "draft" | "published"; //  only required field

  createdAt?: Date;
  updatedAt?: Date;
}