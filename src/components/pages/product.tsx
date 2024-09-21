"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { addToCart } from "@/lib/actions";
import { Product } from "@/types/ApiResponse";
import { MapPin, Truck } from "lucide-react";
import StarRatings from "react-star-ratings"
import { toast } from "react-toastify";
import ReactImageMagnify from "react-image-magnify";


interface Props {
  product: Product
}

const ProductPage = ({ product }: Props) => {

  return (
    <div className="my-4 md:mx-4 mx-1 flex flex-col md:flex-row gap-5">

      <div className="w-full md:min-w-xl grid grid-cols-5 py-4 px-4 gap-12 bg-white rounded">
        <div className="col-span-5 lg:col-span-2 aspect-square">

          <ReactImageMagnify
            smallImage={{
              alt: product.name,
              src: product.image,
              isFluidWidth: true
            }}
            largeImage={{
              alt: product.name,
              src: product.image,
              height: 1200,
              width: 2400,
            }}
            lensStyle={{
              backgroundColor: 'transparent',
              backgroundImage: 'radial-gradient(#0891b2 1px, #0000 1px)',
              backgroundSize: '8px 8px',
            }}
            enlargedImagePosition="over"
            shouldUsePositiveSpaceLens={true}
          />
        </div>

        <div className="info flex flex-col gap-3 col-span-5 lg:col-span-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-base text-gray-800">{product.description}</p>


          <div className="divider border-b border-gray-600"></div>

          <span className="text-2xl font-bold">$ {product.price}</span>

          <table className="w-96">
            <tbody>
              <tr>
                <td className="font-bold text-sm">Brand</td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Size</td>
                <td>{product.size}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Item Form</td>
                <td>{product.itemForm}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Color</td>
                <td>{product.color}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Skin Type</td>
                <td>{product.skinType}</td>
              </tr>
              <tr>
                <td className="font-bold text-sm">Finish Type</td>
                <td>{product.finishType}</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="col-span-5">
          <div className="divider border-b-2 border-gray-500"></div>

          <h2 className="text-2xl font-bold mt-3">About this item</h2>
          <ul className="list-disc ml-5 mt-1 px-5">
            {product.about.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-5">
          <div className="divider border-b-2 border-gray-500"></div>
          <h2 className="text-2xl font-bold mt-3">Important information</h2>

          <div className="px-5">
            <h3 className="font-bold mt-3">Safety Information</h3>
            <p>No Warning Applicable</p>
            <p>For External Use Available</p>

            <h3 className="font-bold mt-3">Ingredients</h3>
            <p>{product.ingredients}</p>
          </div>
        </div>


      </div>


      <div className="card sticky">
        <Card className="flex flex-col w-72 lg:w-80 h-fit">
          <CardHeader className="pb-0">
            <CardTitle className="text-3xl">${product.price}</CardTitle>
            <StarRatings
              rating={product.rating}
              starRatedColor="gold"
              name="rating"
              starDimension="25px"
              starSpacing="2px"
            />
          </CardHeader>

          <CardContent className="py-3 mt-0 border-b border-gray-300 flex flex-col gap-1">
            <p className="flex gap-1"><MapPin /> Deliver to Pakistan</p>
            <p className="flex gap-1"><Truck /> Shipping in 3 days</p>
            <p className="text-pink-500 text-xl">{product.stock > 0 ? "In stock" : "Out of stock"} </p>
          </CardContent>

          <CardFooter className="mt-4">
            <Button
              className="w-full"
              onClick={() => {
                addToCart(product.id, 1)
                toast.success(`Product with id ${product.id} added to cart`)
              }}>
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}

export default ProductPage;
