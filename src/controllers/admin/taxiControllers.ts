import { createAdminTaxiService, deleteAdminTaxiService, getAllAdminTaxisService, getAdminTaxiByIdService, updateAdminTaxiService,
} from "@/services/admin/taxiServices";

import { NextResponse } from "next/server";


export const createAdminTaxiController = async (req: Request) => {
    try {
        const taxi = await createAdminTaxiService(req);

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
        const taxi = await updateAdminTaxiService(req, id);

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