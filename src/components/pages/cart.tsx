"use client";

import CartCard from "@/components/cart-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteFromCart, updateQuantity } from "@/lib/actions";
import { fetchCartProducts } from "@/lib/data";
import { CartProduct } from "@/types/ApiResponse";
import { useEffect, useState } from "react";

const CartPage = () => {

  const [products, setProducts] = useState<CartProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0)

  useEffect(() => {
    const loadCart = async () => {
      const products = await fetchCartProducts();
      setProducts(products);
      setLoading(false);
    }
    loadCart()
  }, [])

  useEffect(() => {
    const quantity = products.reduce((acc, p) => acc + p.quantity!, 0);
    const price = products.reduce((acc, p) => acc + (p.price * p.quantity!), 0);

    setTotalQuantity(quantity);
    setTotalPrice(price);
  }, [products])



  const handleQuantityChange = (productId: string, quantity: number) => {

    const updatedCart  = products.map(product => 
      product.id === productId ? {...product, quantity} : product
    )

    updateQuantity(productId, quantity);
    setProducts(updatedCart);
  }

  const handleDelete = (productId: string) => {
    setProducts(products => products.filter(product => product.id !== productId));
    deleteFromCart(productId);
  };

  return (<>
    <div className="flex my-10 gap-10 justify-center flex-wrap">

      <div className="max-w-4xl w-full px-4 py-3 bg-white rounded-lg">
        <h1 className="font-black text-4xl">Shopping Cart</h1>
        <hr className="my-2 border-black" />

        <div className="flex flex-col gap-5 px-1 py-5">

          {loading ? "Loading..." :

            (products.length === 0) ?
              "Nothing in cart " :
              products.map(product => (
                <CartCard
                  key={product.id}
                  product={product}
                  onDelete={handleDelete}
                  onQuantityChange={(quantity) => handleQuantityChange(product.id, quantity)}
                />
              ))
          }

        </div>
      </div>

      <Card className="flex flex-col w-72 h-fit">
        <CardHeader>
          <CardTitle className="text-lg">Order summary</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between py-3 border-b border-gray-300">
            <span className="text-sm text-gray-500">Total items</span>
            <span className="text-sm text-black font-semibold">{totalQuantity}</span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-300">
            <span className="text-sm text-gray-500">Subtotal</span>
            <span className="text-sm text-black font-semibold">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-300">
            <span className="text-sm text-gray-500">Shipping estimate</span>
            <span className="text-sm text-black font-semibold">$5.00</span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-300">
            <span className="text-sm text-gray-500">Tax estimte</span>
            <span className="text-sm text-black font-semibold">$9.00</span>
          </div>

          <div className="flex justify-between py-3">
            <span className="text-sm font-semibold">Order</span>
            <span className="text-sm text-black font-semibold">${(totalPrice + 14.00).toFixed(2)}</span>
          </div>
        </CardContent>

        <CardFooter>
          <Button>Checkout</Button>
        </CardFooter>
      </Card>

    </div>
  </>)
}

export default CartPage;
