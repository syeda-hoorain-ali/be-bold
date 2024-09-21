import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async () => {
    
    await dbConnect();

    try {
        const products = await ProductModel.find();

        if (!products) {
            return NextResponse.json({
                success: false,
                message: "No products found",
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "Products found successfully",
            products
        }, { status: 200 })

    } catch (error) {
        
        return NextResponse.json({
            success: false,
            message: "Internal server error",
        }, { status: 500 })
    }
}

