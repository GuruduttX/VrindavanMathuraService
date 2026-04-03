import { createTourController, getAllToursController, getTourBySlugAndDuration } from "@/controllers/packageControllers";

export async function GET(req : Request) {
  return await getAllToursController();
}

export async function POST(req:Request) {
    return await createTourController(req);
}



