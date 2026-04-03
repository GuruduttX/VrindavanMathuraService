import { getUserAllTaxiService } from "@/services/users/taxiServices";

import { NextResponse } from "next/server";


export const getUserAllTaxiController = async () => {
    try {

        const taxis = await getUserAllTaxiService();

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


