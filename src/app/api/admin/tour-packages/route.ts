import { createTourController, getAllToursController } from "@/controllers/admin/packageControllers";

export async function GET(req : Request) {
  return await getAllToursController();
}

export async function POST(req:Request) {
    return await createTourController(req);
}



