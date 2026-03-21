import mongoose, { Schema, Document, Model } from "mongoose";

interface Itinerary {
  id: string;
  day: number;
  title: string;
  description: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface Duration {
  id: string;
  days: string;
  place: string;
}

interface Testimonial {
  id: string;
  name: string;
  description: string;
  rating: string;
}

interface RouteSegment {
  id: string;
  from: string;
  to: string;
}

interface RouteType {
  source: string;
  destination: string;
  segments: RouteSegment[];
}

interface TextItem {
  id: string;
  description: string;
}

interface ChildImage {
  id: string;
  image: string;
  alt: string;
}

export interface ITourPackage extends Document {
  title: string;
  slug: string;
  category: string;
  price: number;
  rating: string;
  reviews : string;

  duration: string;
  status: string;

  days: number;
  nights: number;

  durationbreakdown: Duration[];

  destination: string;
  overview?: string;

  highlights: TextItem[];
  itinerary: Itinerary[];

  inclusions: TextItem[];
  exclusions: TextItem[];

  faqs: FAQ[];

  metaTitle?: string;
  metaDescription?: string;

  schemaTitle?: string;
  schemaDescription?: string;

  refund?: string;
  cancel?: string;
  confirmation?: string;
  payment?: string;

  heroImage?: {alt : string, image : string};
  images: string[];

  childImages: ChildImage[];

  testimonials: Testimonial[];

  documents: TextItem[];

  routes: RouteType;

  isTransferIncluded: boolean;
  isStayIncluded: boolean;
  isBreakfastIncluded: boolean;
  isSightseeingIncluded: boolean;

  createdAt: Date;
  updatedAt: Date;
}



const TourPackageSchema: Schema<ITourPackage> = new Schema(
  {
    title: { type: String, required: true, trim: true },

    slug: { type: String, required: true, unique: true },

    duration: { type: String, required: true },

    category: { type: String, required: true },

    price: { type: Number, required: true, min: 0 },

    rating: { type: String, required : true},

    reviews : {type : String, required : true},

    status: { type: String, required: true },

    days: { type: Number, required: true },
    nights: { type: Number, required: true },

    durationbreakdown: [
      {
        id: { type: String, required: true },
        days: { type: Number, required: true },
        place: { type: String, required: true },
      },
    ],

    destination: { type: String, required: true, index: true },

    overview: { type: String },

    highlights: [
      {
        id: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    itinerary: [
      {
        id: { type: String, required: true },
        day: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    inclusions: [
      {
        id: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    exclusions: [
      {
        id: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    faqs: [
      {
        id: { type: String, required: true },
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],

    metaTitle: { type: String },
    metaDescription: { type: String },

    schemaTitle: { type: String },
    schemaDescription: { type: String },

    refund: { type: String },
    cancel: { type: String },
    confirmation: { type: String },
    payment: { type: String },

    heroImage: { alt : {type : String} , image : {type : String} },

    images: [{ type: String }],

    childImages: [
      {
        id: { type: String, default : "" },
        image: { type: String, default : "" },
        alt: { type: String, deafault : "" },
      },
    ],

    testimonials: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: String, required: true, min: 0, max: 5 },
      },
    ],

    documents: [
      {
        id: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    routes: 
      {
        source: { type: String, required: true },
        destination: { type: String, required: true },
        segments: [
          {
            id: { type: String, required: true },
            from: { type: String, required: true },
            to: { type: String, required: true },
          },
        ],
      },
    

    isTransferIncluded: { type: Boolean, default: false },
    isStayIncluded: { type: Boolean, default: false },
    isBreakfastIncluded: { type: Boolean, default: false },
    isSightseeingIncluded: { type: Boolean, default: false },
  },
  { timestamps: true }
);



const TourPackageModel: Model<ITourPackage> =
  mongoose.models.Packages ||
  mongoose.model<ITourPackage>("Packages", TourPackageSchema);

export default TourPackageModel;