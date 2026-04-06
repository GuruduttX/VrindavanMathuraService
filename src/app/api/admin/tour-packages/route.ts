import { createAdminTourController, getAdminToursController } from "@/controllers/admin/packageControllers";

export async function GET(req : Request) {
  return await getAdminToursController();
}

export async function POST(req:Request) {
    return await createAdminTourController(req);
}