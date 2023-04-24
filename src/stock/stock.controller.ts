import stockService from "./stock.service";
import { Request, Response } from "express";

class stockController {
  async stockValue(req: Request, res: Response) {
    const stock = await stockService.stockValue();
    return res.status(200).json("Stock values created successfully");
  }

  async findRandom(req: Request, res: Response) {
    const products = await stockService.findRandom();
    return res.status(200).json(products);
  }

  async getAllStock(req: Request, res: Response) {
    const allStock = await stockService.getAllStock();
    return res.status(200).json(allStock);
  }
}

export default new stockController();
