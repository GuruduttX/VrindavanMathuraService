import {getUserTaxiBySlugController} from "@/controllers/users/taxiControllers";
import { connectDB } from "@/lib/mongodb";


export async function GET( { params }: { params: Promise<{ slug : string }> } ) {

    await connectDB();

    const {slug} = await params;

    return getUserTaxiBySlugController(slug);
    
}

