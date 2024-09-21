import CartPage from '@/components/pages/cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Your Cart - Be Bold",
  description: "Review the items in your shopping cart. Update quantities, remove items, and see the total cost before you proceed to checkout on Be Bold.",
  keywords: "shopping cart, update cart, review cart, online store, checkout",
}

const page = () => {
  return (
    <CartPage />
  )
}

export default page
