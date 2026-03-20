import { connectDB } from "@/lib/mongodb";
import PoojaModel from "@/models/poojaModel";
export async function getPoojas(){
    await connectDB();
    const poojas = await PoojaModel.find();
    return poojas
}

export async function createPooja(data:any) {
    await connectDB();
    const pooja = await PoojaModel.create(data);
    return pooja;
}

export async function updatePooja(data:any, id : string) {
    await connectDB();
    const pooja = await PoojaModel.findByIdAndUpdate(id,data, {new : true});
    return pooja;
}

export async function getPoojaById(id : string){
    await connectDB();
    const pooja = await PoojaModel.findById(id);

    if (!pooja) {
        throw new Error("Pooja not found");
    }

    return pooja;
}

export async function deletePooja(id : string) {
    await connectDB();
    const pooja = await PoojaModel.findByIdAndDelete(id);
    
    if(!pooja){
        throw new Error("Not Found")
    }
    return pooja;
}
