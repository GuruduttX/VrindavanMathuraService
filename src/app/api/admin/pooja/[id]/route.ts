import { deleteAdminPoojaController, getAdminPoojaByIdController, updateAdminPoojaController } from "@/controllers/admin/poojaController";

export async function PUT(req:Request, context : { params : Promise<{id : string}>}) {
    const params = await context.params;
    return await updateAdminPoojaController(req,params);
}

export async function DELETE(req : Request, context : {params : Promise<{id : string}>}) {
    const params = await context.params;
    return await deleteAdminPoojaController(params);
}

export async function GET(req:Request , context : {params : Promise<{id : string}>}) {
    const params = await context.params;
    return await getAdminPoojaByIdController(params)
}