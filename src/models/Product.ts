import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
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

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  itemForm: {
    type: String,
    required: true,
  },
  finishType: {
    type: String,
    required: true,
  },
  skinType: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  about: [
    {
      type: String,
      required: true,
    }
  ],
  ingredients: {
    type: String,
    required: true,
  }
});


const ProductModel = (mongoose.models.products as mongoose.Model<IProduct>) || mongoose.model<IProduct>("products", ProductSchema);
export default ProductModel;
