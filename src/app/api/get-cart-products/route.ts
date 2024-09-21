import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/models/Product";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {

    await dbConnect();

    const { productIds } = await request.json() as { productIds: string[] }

    try {
        const products = await ProductModel.find({
            id: { $in: productIds }
        }).select('id name brand image price stock');

        if (!products) {
            return NextResponse.json({
                success: false,
                message: "No products found",
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "Products found successfully",
            cartProducts: products
        }, { status: 200 })

    } catch (error) {

        return NextResponse.json({
            success: false,
            message: "Internal server error",
        }, { status: 500 })
    }
}

