import { Product } from "./types/product.type";
import ProductModel from "./product.schema";
import { readFile, writeFile } from "fs/promises";

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

  async write() {
    const products = await this.list();

    writeFile("products.json", JSON.stringify(products, null, 2));
  }

  async read() {
    const products = JSON.parse(await readFile("products.json", "utf-8"));

    return products;
  }
}
