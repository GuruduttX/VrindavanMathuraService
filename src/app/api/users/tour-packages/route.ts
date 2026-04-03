import { getAllToursController } from "@/controllers/packageControllers";

export async function GET(req : Request) {

  return await getAllToursController();
  
}





