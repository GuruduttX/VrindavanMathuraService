import { createPoojaController, getPoojasController } from "@/controllers/poojaController";

export async function GET() {
    return await getPoojasController();
}

export async function POST(req : Request){
    return await createPoojaController(req);
}

