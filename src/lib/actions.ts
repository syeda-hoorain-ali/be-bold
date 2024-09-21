import { LocalCartProduct } from "@/types/ApiResponse";


export const addToCart = (productId: string, quantity: number): void => {
        
    const storageCart = localStorage.getItem('be-bold-cart');
    const cart: LocalCartProduct[] = storageCart ? JSON.parse(storageCart) : [];

    const existingProduct = cart.find(item => item.productId === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity; 
    } else {
        cart.push({ productId, quantity }); 
    }

    localStorage.setItem('be-bold-cart', JSON.stringify(cart));
};


export const deleteFromCart = (productId: string): void => {
    const storageCart = localStorage.getItem('be-bold-cart');
    if (!storageCart) return;

    const cart: LocalCartProduct[] = JSON.parse(storageCart);
    const newCart = cart.filter(product => product.productId !== productId);

    localStorage.setItem('be-bold-cart', JSON.stringify(newCart));
};


export const updateQuantity = (productId: string, quantity: number): void => {
    const storageCart = localStorage.getItem('be-bold-cart');
    if (!storageCart) return;

    const cart: LocalCartProduct[] = JSON.parse(storageCart);
    const productIndex = cart.findIndex(product => product.productId === productId);

    if (productIndex > -1) {
        cart[productIndex].quantity = quantity; 
        localStorage.setItem('be-bold-cart', JSON.stringify(cart));
    }
};

