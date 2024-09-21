"use client";

import { updateQuantity } from '@/lib/actions';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface Props {
  productId: string;
  stock: number;
  initialValue?: number;
  onQuantityChange?: (quantity: number) => void;
}

const QuantitySelector = ({ productId, stock, initialValue, onQuantityChange }: Props) => {
  const [quantity, setQuantity] = useState(initialValue || 1);

  const increaseQuantity = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateQuantity(productId, newQuantity);
      
      if(onQuantityChange) onQuantityChange(quantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(productId, newQuantity);
      
      if(onQuantityChange) onQuantityChange(quantity);
    }
  };


  return (
    <div className="flex items-center gap-4">
      <button
        className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md disabled:bg-opacity-60"
        onClick={decreaseQuantity}
        disabled={quantity <= 1}
      >
        <Minus className='size-5' />
      </button>

      <span className="w-5 text-center text-lg font-semibold">{quantity}</span>
      
      <button
        className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md disabled:bg-opacity-60"
        onClick={increaseQuantity}
        disabled={quantity >= stock}
      >
        <Plus className='size-5' />
      </button>
    </div>
  );
};

export default QuantitySelector;
