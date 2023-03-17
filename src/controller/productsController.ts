import { Request, Response, json } from "express";
import productService from "../service/productService";

class productsController {
  public async createFile(req: Request, res: Response) {
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

  public async stock(req: Request, res: Response) {
    const data = await productService.stock();
    return res.send(data);
  }

  public async stockTotal(req: Request, res: Response) {
    const data = await productService.stockTotal();
    return res.sendStatus(data);
  }
}

export default new productsController();
