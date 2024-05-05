import { Schema, model, models } from "mongoose";

interface ProductDT {
  name: string;
  price: number;
}

const ProductSchema = new Schema<ProductDT>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = models.Product || model("Product", ProductSchema);
export default Product;
