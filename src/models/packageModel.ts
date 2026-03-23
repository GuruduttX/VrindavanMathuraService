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
    title: { type: String, required : true, trim: true },

    slug: { type: String, function () : boolean {
            return this.status === "published";
          }, unique: true },

    duration: { type: String, required: function () : boolean {
            return this.status === "published";
          }
     },

    category: { type: String, function () : boolean {
            return this.status === "published";
          } },

    price: { type: Number, function () : boolean {
            return this.status === "published";
          }, min: 0 },

    rating: { type: String, function () : boolean {
            return this.status === "published";
          }},

    reviews : {type : String,function () : boolean {
            return this.status === "published";
          }},

    status: { type: String, function () : boolean {
            return this.status === "published";
          }},

    days: { type: Number, function () : boolean {
            return this.status === "published";
          } },
    nights: { type: Number,function () : boolean {
            return this.status === "published";
          }},

    durationbreakdown: [
      {
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        days: { type: Number, function () : boolean {
            return this.status === "published";
          } },
        place: { type: String, function () : boolean {
            return this.status === "published";
          } },
      },
    ],

    destination: { type: String, function () : boolean {
            return this.status === "published";
          }, index: true },

    overview: { type: String },

    highlights: [
      {
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        description: { type: String, function () : boolean {
            return this.status === "published";
          } },
      },
    ],

    itinerary: [
      {
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        day: { type: Number, function () : boolean {
            return this.status === "published";
          } },
        title: { type: String, function () : boolean {
            return this.status === "published";
          } },
        description: { type: String, function () : boolean {
            return this.status === "published";
          } },
      },
    ],

    inclusions: [
      {
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        description: { type: String, function () : boolean {
            return this.status === "published";
          } },
      },
    ],

    exclusions: [
      {
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        description: { type: String, function () : boolean {
            return this.status === "published";
          } },
      },
    ],

    faqs: [
      {
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        question: { type: String, function () : boolean {
            return this.status === "published";
          } },
        answer: { type: String, function () : boolean {
            return this.status === "published";
          } },
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
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        name: { type: String, function () : boolean {
            return this.status === "published";
          } },
        description: { type: String, function () : boolean {
            return this.status === "published";
          } },
        rating: { type: String, function () : boolean {
            return this.status === "published";
          }, min: 0, max: 5 },
      },
    ],

    documents: [
      {
        id: { type: String, function () : boolean {
            return this.status === "published";
          } },
        description: { type: String, function () : boolean {
            return this.status === "published";
          } },
      },
    ],

    routes: 
      {
        source: { type: String, function () : boolean {
            return this.status === "published";
          } },
        destination: { type: String, function () : boolean {
            return this.status === "published";
          } },
        segments: [
          {
            id: { type: String, function () : boolean {
            return this.status === "published";
          } },
            from: { type: String, function () : boolean {
            return this.status === "published";
          } },
            to: { type: String, function () : boolean {
            return this.status === "published";
          } },
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