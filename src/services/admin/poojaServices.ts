import { connectDB } from "@/lib/mongodb";
import PoojaModel from "@/models/poojaModel";
export async function getAdminPoojasService(){
    await connectDB();
    const poojas = await PoojaModel.find();
    return poojas
}

export async function createAdminPoojaService(data:any) {
    await connectDB();
    console.log(data , "from create pooja service")
    const pooja = await PoojaModel.create(data);
    return pooja;
}

export async function updateAdminPoojaService(data:any, id : string) {
    await connectDB();
    console.log(data, "pooja data to be updated");
    const pooja = await PoojaModel.findByIdAndUpdate(id,data, {new : true});
    console.log(pooja , "from mongoDB after update");
    return pooja;
}

export async function getAdminPoojaByIdService(id : string){
    await connectDB();
    const pooja = await PoojaModel.findById(id);

    if (!pooja) {
        throw new Error("Pooja not found");
    }

    return pooja;
}

export async function deleteAdminPoojaService(id : string) {
    await connectDB();
    const pooja = await PoojaModel.findByIdAndDelete(id);
    
    if(!pooja){
        throw new Error("Not Found")
    }
    return pooja;
}

