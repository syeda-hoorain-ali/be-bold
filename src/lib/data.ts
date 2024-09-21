import { ApiResponse, CartProduct, LocalCartProduct } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/get-products`)

    if (response.data.success) {
      return response.data
    };

  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError.response?.data
  }
}

export const fetchProduct = async (id: string) => {
  try {
    const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/get-product?id=${id}`)

    if (response.data.success) {
      return response.data
    };

  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>
    return axiosError.response?.data
  }
}

export const fetchCartProducts = async (): Promise<CartProduct[]> => {
  const localCart = localStorage.getItem('be-bold-cart');
  const localCartItems: LocalCartProduct[] = localCart ? JSON.parse(localCart) : [];

  if (localCartItems.length === 0) return [];

  try {
    const productIds = localCartItems.map(item => item.productId);
    const response = await axios.post<ApiResponse>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/get-cart-products`, { productIds });

    if (!response.data.success || !response.data.cartProducts) return [];
    const fetchedProducts: CartProduct[] = response.data.cartProducts;

    const mergedCart = localCartItems.map(item => {
      const product = fetchedProducts.find(p => p.id === item.productId);

      if (!product) return null;
      return { ...product, quantity: item.quantity };

    }).filter(product => product !== null)

    return mergedCart;

  } catch (error) {
    return []
  }
};



export const reviews = [
  { name: 'Anna', message: "Amazing products, my skin has never felt better!" },
  { name: 'Maria', message: "Great value for money. I'm a fan!" },
  { name: 'Sophia', message: "Excellent customer service and fast delivery." },
]

