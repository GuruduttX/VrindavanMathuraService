import { createCarService, deleteCarService, getAllCarsSevice, getCarByIdService, updateCarService} from "@/services/carServices";

import { NextResponse } from "next/server";


export const createCar = async (req: Request) => {

    try {

        const car = await createCarService(req);

        return NextResponse.json({
            success: true,
            data: car
        }, { status: 201 });

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });

    }

};


export const getAllCars = async () => {

    try {

        const cars = await getAllCarsSevice();

        return NextResponse.json({
            success: true,
            data: cars
        }, { status: 200 });

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
        
    }

};


export const getCarById = async (id: string) => {

    try {

        const car = await getCarByIdService(id);

        if (!car) {
            return NextResponse.json({
                success: false,
                message: "Car not found"
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: car
        });

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }

};

export const updateCar = async (req: Request, id: string) => {

    try {

        const car = await updateCarService(req, id);

        return NextResponse.json({
            success: true,
            data: car
        });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }

};


export const deleteCar = async (id: string) => {

    try {

        await deleteCarService(id);

        return NextResponse.json({
            success: true,
            message: "Car deleted successfully"
        });

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });

    }

};