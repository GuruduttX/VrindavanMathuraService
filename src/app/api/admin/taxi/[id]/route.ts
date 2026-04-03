import {
    deleteTaxi,
    getTaxiById,
    updateTaxi,
} from "@/controllers/admin/taxiControllers";
import { connectDB } from "@/lib/mongodb";


export async function GET( req : Request, 
    context: { params: Promise<{ id: string }> }
) {
    await connectDB();
    const {id} = await context.params;
    return getTaxiById(id);
}


export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    await connectDB();
    const {id} = await params
    return updateTaxi(req, id);
}

export async function DELETE( req : Request, 
    { params }: { params: Promise<{ id: string }>}
) {
    await connectDB();
    const {id} = await params;
    return deleteTaxi(id);
}