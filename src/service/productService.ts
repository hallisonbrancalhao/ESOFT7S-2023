import { writeFile, readFile } from "fs/promises";

export interface ProductData {
  nome: string;
  qtde: number;
  preco: number;
  data_compra: Date;
  data_entrega: Date;
}

class ProductService {
  async createProductList(data: Promise<{}>) {
    try {
      console.log("Criando arquivo...");
      await writeFile("products.json", JSON.stringify(data, null, 2));
      console.log("Arquivo criado!");
    } catch (err) {
      throw new Error("Falha ao salvar lista de produtos");
    }
  }

  async readProducts(): Promise<ProductData[] | undefined> {
    try {
      const data = await readFile("products.json", "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Erro ao ler arquivo JSON:", err);
    }
  }
}

export default new ProductService();
