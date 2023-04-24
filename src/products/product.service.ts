import { Product } from "./types/product.type";
import ProductModel from "./product.schema";
import { fstat } from "fs";
import { readFile } from "fs/promises";

export class ProductService {
  constructor() {}

  async create(product: Product) {
    return await ProductModel.create(product);
  }

  async find(id: string) {
    return await ProductModel.findById(id);
  }

  async list() {
    const listedProducts = await ProductModel.find();
    return listedProducts;
  }

  async update(id: string, data: Product) {
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: id },
      {
        name: data.name,
        price: data.price,
        quantity: data.quantity,
      },
      { new: true }
    );

    return updatedProduct;
  }

  async delete(id: string) {
    await ProductModel.findByIdAndDelete(id);
    return "Successfully deleted";
  }

  async productsFile() {
    const products = await readFile("products.json", "utf8");
    return products;
  }
}
