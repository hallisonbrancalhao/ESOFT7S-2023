import { Request, Response } from "express";
import productService, { ProductData } from "../service/productService";

class productsController {
  public async createFile(req: Request, res: Response) {
    console.log("productsController : createFile : req:", req.body);
    productService.createProductList(req.body);
    return res.status(201).send();
  }

  public async readFiles(req: Request, res: Response) {
    const data = await productService.readProducts();
    if (!data) {
      return res.status(500).send("Nenhum item encontrado");
    }
    return res.send(data);
  }
}

export default new productsController();
