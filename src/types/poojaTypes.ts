import mongoose, {Document} from "mongoose";
interface PoojaDocument extends Document {
  title: string;
  slug: string;
  temple: string;
  location: string;

  price: number;
  discountPrice?: number;
  ratings : number;

  description?: string;
  aboutContent?: string;

  duration?: string;

  benefits: string[];

  availableDays: string[];

  images: string[];

  isActive: boolean;
  isFeatured: boolean;

  createdAt: Date;
  updatedAt: Date;
}