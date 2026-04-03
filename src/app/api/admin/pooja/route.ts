import { createAdminPoojaController, getAdminPoojasController } from "@/controllers/admin/poojaController";

export async function GET() {
    return await getAdminPoojasController();
}

export async function POST(req : Request){
    return await createAdminPoojaController(req);
}

