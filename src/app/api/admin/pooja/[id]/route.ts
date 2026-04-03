import { deletePoojaController, getPoojaByIdController, updatePoojaController } from "@/controllers/admin/poojaController";

export async function PUT(req:Request, context : { params : Promise<{id : string}>}) {
    const params = await context.params;
    return await updatePoojaController(req,params);
}

export async function DELETE(req : Request, context : {params : Promise<{id : string}>}) {
    const params = await context.params;
    return await deletePoojaController(params);
}

export async function GET(req:Request , context : {params : Promise<{id : string}>}) {
    const params = await context.params;
    return await getPoojaByIdController(params)
}