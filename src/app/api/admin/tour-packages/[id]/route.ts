import { getTourByIdController, updateTourController } from "@/controllers/admin/packageControllers";
import { deleteTourController } from "@/controllers/packageControllers";
export async function PUT(
  req: Request,
   context : { params: Promise<{ id: string }> }
) {
   const params = await context.params;
   return await updateTourController(req, params);
}

export async function DELETE(req : Request, context : {params : Promise<{id : string}>}) {
    const params = await context.params;
    return await deleteTourController(req, params);
}

export async function GET(req : Request , context : {params : Promise<{id : string}>}) {
   const params = await context.params;
   return await getTourByIdController(params);
}
