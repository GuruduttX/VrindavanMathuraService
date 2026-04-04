import { connectDB } from "@/lib/mongodb";
import PoojaModel from "@/models/poojaModel";


export async function getUserPoojasService() {

    await connectDB();

    try {

        const poojas = await PoojaModel.find({status : {$eq : "published"}});
        return poojas

    } catch (error) {

        console.log(error)

    }
}


export const getUserPoojaBySlugService = async (slug: string) => {

    await connectDB();

    const pooja = await PoojaModel.findOne({ slug });

    if(pooja?.status == "draft"){
        return
    }

    if (!pooja) {

        throw new Error("Pooja not found");
        
    }

    return pooja;
};
