import { ProductService } from "../products/product.service";
import StockModel from "./stock.schema";
import { StockProducts } from "./types/stock.type";

class stockService {
  async stockValue() {
    const products = await new ProductService().list();
    const stockProducts = products.map((product) => ({
      ...product,
      stockValue: product.price * product.quantity,
    }));
    return await StockModel.create(stockProducts);
  }

  async findRandom() {
    const products = await StockModel.find().limit(10);

    let productsSelecteds: any = [];

    while (productsSelecteds.length < 4) {
      let random = Math.floor(Math.random() * products.length);
      if (!productsSelecteds.includes(products[random]))
        productsSelecteds.push(products[random]);
    }
    return productsSelecteds;
  }

  async getAllStock() {
    const stockProducts: StockProducts[] = await StockModel.find();
    const stock = stockProducts.reduce((total, product) => {
      return total + product.stock;
    }, 0);
    return stock;
  }
}

export default new stockService();
