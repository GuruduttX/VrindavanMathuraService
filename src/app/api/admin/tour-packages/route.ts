<<<<<<< HEAD
import { createTourController, getAllToursController } from "@/controllers/admin/packageControllers";
=======
import { createAdminTourController, getAdminToursController } from "@/controllers/admin/packageControllers";
>>>>>>> a67274dc6c967325b0ccf09342306a510125c065

export async function GET(req : Request) {
  return await getAdminToursController();
}

export async function POST(req:Request) {
    return await createAdminTourController(req);
}