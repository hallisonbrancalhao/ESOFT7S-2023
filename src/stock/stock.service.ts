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
    return await StockModel.insertMany(stockProducts);
  }

  async findRandom() {
    const products = await StockModel.find();
    if (products.length < 10) return;

    let productsSelecteds: any = [];
    while (productsSelecteds.length < 10) {
      let random = Math.floor(Math.random() * products.length);
      if (!productsSelecteds.includes(products[random])) {
        productsSelecteds.push(products[random]);
      }
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

/**
 * 3 - Nessa service utilize o map para adicionar o campo stock Value
e Multiplique o quantity pelo price e depois salve essa nova estrutura em uma "tabela" chamada
productStock

4 - Na service de produtos crie uma rota que busque 10 produtos e retorne 4 de maneira aleatórios

5 - Na service de stock busque todos os itens do banco e utilizando o reduce traga o valor total
     do stock e disponibilize isso em uma rota
 */
