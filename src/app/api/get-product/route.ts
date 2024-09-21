import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {

    await dbConnect();
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    try {
        const product = await ProductModel.findOne({ id: id });

        if (!product) {
            return NextResponse.json({
                success: false,
                message: "Product not found",
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "Product found successfully",
            product
        }, { status: 200 })

    } catch (error) {

        return NextResponse.json({
            success: false,
            message: "Internal server error",
        }, { status: 500 })
    }
}

