import { Document } from "mongoose";


export interface IFAQ {
  question: string;
  answer: string;
}

export interface IMETA {
  title: string;
  description: string;
}

export interface ISchema {
  schemaTitle: string;
  schemaDescription: string;
}


export interface IBlog extends Document {
  
  title: string;
  category: string;
  slug: string;
  author: string;
  content : string,
  subContent : string,
  image : string,
  alt : string,
  meta: IMETA;
  structuredData: ISchema;
  faqs: IFAQ[];
  status: string;
  createdAt?: Date;
  updatedAt?: Date;

}