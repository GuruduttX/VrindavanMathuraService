import {
    deleteAdminTaxiController,
    getAdminTaxiByIdController,
    updateAdminTaxiController,
} from "@/controllers/admin/taxiControllers";
import { connectDB } from "@/lib/mongodb";


export async function GET( req : Request, 
    context: { params: Promise<{ id: string }> }
) {
    await connectDB();
    const {id} = await context.params;
    return getAdminTaxiByIdController(id);
}


export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    await connectDB();
    const {id} = await params
    return updateAdminTaxiController(req, id);
}



export async function DELETE( req : Request, 
    { params }: { params: Promise<{ id: string }>}
) {
    await connectDB();
    const {id} = await params;
    return deleteAdminTaxiController(id);
}