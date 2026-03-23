import {
    deleteTaxi,
    getTaxiById,
    updateTaxi,
} from "@/controllers/taxiControllers";
import { connectDB } from "@/lib/mongodb";


export async function GET(
    { params }: { params: { id: string } }
) {
    await connectDB();
    return getTaxiById(params.id);
}


export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    await connectDB();
    return updateTaxi(req, params.id);
}

export async function DELETE(
    { params }: { params: { id: string } }
) {
    await connectDB();
    return deleteTaxi(params.id);
}