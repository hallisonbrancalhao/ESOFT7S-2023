import { Request, Response } from "express";
import { ProductService } from "./product.service";

class productController {
  async create(req: Request, res: Response) {
    const product = await new ProductService().create(req.body);
    return res.status(200).json(product);
  }

  async list(req: Request, res: Response) {
    const products = await new ProductService().list();
    if (products) return res.status(200).json(products);
    return res.status(400).json("Product not found");
  }
  async update(req: Request, res: Response) {
    const updatedProduct = await new ProductService().update(
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedProduct);
  }
  async delete(req: Request, res: Response) {
    return await new ProductService().delete(req.params.id);
  }

  async findByName(req: Request, res: Response) {}

  async find(req: Request, res: Response) {
    return await new ProductService().find(req.params.id);
  }

  async productsFile(req: Request, res: Response) {
    return await new ProductService().productsFile();
  }
}

export default new productController();
