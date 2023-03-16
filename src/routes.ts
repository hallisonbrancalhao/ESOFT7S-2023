import { Router } from "express";

import healthCheckController from "./controller/healthCheckController";
import userController from "./controller/userController";
import productsController from "./controller/productsController";

const routes = Router();

routes.get("/health-check", healthCheckController.check);
routes.get("/users", userController.findUsers);
routes.post("/users", userController.createUser);

//AEP

routes.post("/products", productsController.createFile);
routes.get("/products", productsController.readFiles);
routes.get("/products-stock", productsController.stock);
routes.get("/products-stock-total", productsController.stockTotal);

export default routes;
