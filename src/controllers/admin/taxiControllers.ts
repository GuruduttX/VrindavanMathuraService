import {
  createAdminTaxiService,
  deleteAdminTaxiService,
  getAllAdminTaxisService,
  getAdminTaxiByIdService,
  updateAdminTaxiService,
  getUserTaxiBySlugService,
  getAdminPoojaBySlugService
} from "@/services/admin/taxiServices";
import { taxiSchema } from "@/zodSchema/taxiSchema";

import { NextResponse } from "next/server";
import { success } from "zod";


export const createAdminTaxiController = async (req: Request) => {
    
    try {
        const body =  await req.json();

        const result = taxiSchema.safeParse(body);
        
        if(!result.success){
            return Response.json({success : false, error : result.error.flatten()}
        ,{status : 400})
        }

        const taxiData = result.data;

        const taxi = await createAdminTaxiService(taxiData);

        return NextResponse.json(
            {
                success: true,
                data: taxi,
            },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
};

export const getUserTaxiBySlugController = async(id:string) => {
    try {
        const taxi = await getUserTaxiBySlugService(id);
        return NextResponse.json(
            {
                success: true,
                data: taxi,
            }
        )
    } catch (error:any) {
        return NextResponse.json(
          {
            success: false,
            error: error.message,
          },
          { status: 500 },
        );
    }
}

export const getAdminTaxisController = async () => {
    try {
        const taxis = await getAllAdminTaxisService();

        return NextResponse.json(
            {
                success: true,
                data: taxis,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
};


export const getAdminTaxiByIdController = async (id: string) => {
    try {
        const taxi = await getAdminTaxiByIdService(id);

        if (!taxi) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Taxi not found",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: taxi,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
};


export const updateAdminTaxiController = async (req: Request, id: string) => {
    
    try {

        const body =  await req.json();

        const result = taxiSchema.safeParse(body);
        
        if(!result.success){
            return Response.json({success : false, error : result.error.flatten()}
        ,{status : 400})
        }

        const taxiData = result.data;

        const taxi = await updateAdminTaxiService(taxiData, id);

        return NextResponse.json({
            success: true,
            data: taxi,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
};


export const deleteAdminTaxiController = async (id: string) => {
    try {
        await deleteAdminTaxiService(id);

        return NextResponse.json({
            success: true,
            message: "Taxi deleted successfully",
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
};

export async function getAdminTaxiBySlugController(slug : string){
    try {

      const taxi = await getAdminPoojaBySlugService(slug);
      
      if(!taxi){
         return NextResponse.json({exists : false}, {status : 404});
      }

      return NextResponse.json({exists : true, data : taxi}, {status : 200});
      
    } catch (error) {
       console.log("This is the error ", error);
       return NextResponse.json({message : "Something went Wrong!"},{status:500})
    }
}