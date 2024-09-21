export interface Product {
    name: string;
    id: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    size: string;
    brand: string;
    itemForm: string;
    finishType: string;
    skinType: string;
    color: string;
    about: string[];
    ingredients: string;
}

export interface LocalCartProduct {
    productId: string;
    quantity: number;
}

export interface CartProduct {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    stock: number;
    quantity?: number; // optional because it's not in database but in localstorage
}

export interface ApiResponse {
    success: boolean;
    message: string;
    product?: Product;
    products?: Product[];
    cartProducts?: CartProduct[]
}