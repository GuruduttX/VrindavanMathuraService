
import { getTourBySlugController } from "@/controllers/users/packageControllers";
export async function GET(req : Request, {params} : {params : Promise<{slug : string}>}){
     const {slug} = await params;
     console.log("hello", slug);
     return getTourBySlugController(slug);
}