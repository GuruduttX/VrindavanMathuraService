import {
    createTaxiService,
    deleteTaxiService,
    getAllTaxisService,
    getTaxiByIdService,
    updateTaxiService,
} from "@/services/taxiServices";

import { NextResponse } from "next/server";


export const createTaxi = async (req: Request) => {
    try {
        const taxi = await createTaxiService(req);

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


export const getAllTaxis = async () => {
    try {
        const taxis = await getAllTaxisService();

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


export const getTaxiById = async (id: string) => {
    try {
        const taxi = await getTaxiByIdService(id);

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


export const updateTaxi = async (req: Request, id: string) => {
    try {
        const taxi = await updateTaxiService(req, id);

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


export const deleteTaxi = async (id: string) => {
    try {
        await deleteTaxiService(id);

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