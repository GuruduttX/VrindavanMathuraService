import { connectDB } from "@/lib/mongodb"
import Car from "@/models/carModel";


export const createCarService = async (req: Request) => {
    try {
        await connectDB();
        const carData = await req.json();
        return await Car.create(carData);
    } catch (error) {
        throw new Error("Error creating car");
    }
};

export const getAllCarsSevice = async () => {
    try {
        await connectDB();
        return await Car.find();
    } catch (error) {
        throw new Error("Error fetching cars");
    }
};

export const getCarByIdService = async (id: string) => {
    try {
        await connectDB();
        return await Car.findById(id);
    } catch (error) {
        throw new Error("Error fetching car by ID");
    }
};

export const updateCarService = async (req: Request, id: string) => {
    try {
        await connectDB();
        const data = await req.json();
        return await Car.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error("Error updating car");
    }
};

export const deleteCarService = async (id: string) => {
    try {
        await connectDB();
        return await Car.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Error deleting car");
    }
};
