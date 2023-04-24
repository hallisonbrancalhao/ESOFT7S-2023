import { Router } from "express";
import userController from "./user/user.controller";
import productController from "./products/product.controller";
import stockController from "./stock/stock.controller";

const routes = Router();

routes.post("/users", userController.create);
routes.get("/users", userController.list);
routes.get("/users/:id", userController.find);
routes.put("/users/:id", userController.update);
routes.delete("/users/:id", userController.delete);
routes.get("/users-name", userController.findByName);

routes.post("/products", productController.create);
routes.get("/products", productController.list);
routes.get("/products-file", productController.read);
routes.get("/products/:id", productController.find);
routes.put("/products/:id", productController.update);
routes.delete("/products/:id", productController.delete);
routes.get("/products-name", productController.findByName);

routes.get("/stock", stockController.getAllStock);
export default routes;
