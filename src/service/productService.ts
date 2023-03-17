import { writeFile, readFile } from "fs/promises";

class ProductService {
  async createProductList(data) {
    try {
      console.log("Criando arquivo...");
      await writeFile("products.json", JSON.stringify(data, null, 2));
      console.log("Arquivo criado!");
    } catch (err) {
      throw new Error("Falha ao salvar lista de produtos");
    }
  }

  async readProducts() {
    try {
      const data = await readFile("products.json", "utf8");
      return JSON.parse(data);
    } catch (err) {
      throw new Error("Erro ao ler arquivo");
    }
  }
  async stock() {
    try {
      const data = await this.readProducts();
      const productStock = data.map((product) => {
        let stock = {
          nome: product.nome,
          qtde: product.qtde,
          preco: product.preco,
          valor_stock: product.qtde * product.preco,
        };
        return stock;
      });
      return productStock;
    } catch (err) {
      throw new Error("Erro ao executar calculo");
    }
  }

  async stockTotal() {
    const products = await this.stock();
    const total_value_stock = products.reduce((acc, product) => {
      return acc + product.valor_stock;
    }, 0);
    return total_value_stock;
  }
}

export default new ProductService();
