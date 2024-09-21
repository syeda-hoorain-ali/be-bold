"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { addToCart } from "@/lib/actions";
import Image from "next/image";
import { toast } from "react-toastify";

interface Props {
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    stock: number;
  }
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="max-w-72 lg:max-w-sm shadow-lg rounded-lg hover:scale-105 transition-all">
      <Link href={`/product/${product.id}`}>
        <CardHeader>
          <Image
            width={192}
            height={192}
            src={product.image}
            alt={product.name}
            className="rounded-t-lg w-full h-48 object-cover"
          />
        </CardHeader>

        <CardContent className="p-4">
          <div className="h-36 lg:h-32">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          </div>

          <p className="flex justify-between mt-2">
            <span className="text-gray-500">Stock: {product.stock}</span>
            <span className="text-pink-500 font-bold">${product.price}</span>
          </p>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">

        <Button
          className="w-full"
          onClick={() => {
            addToCart(product.id, 1)
            toast.success(`Product with id ${product.id} added to cart`)
          }}>
          Add to Cart
        </Button>

      </CardFooter>
    </Card>
  );
};

export default ProductCard;
