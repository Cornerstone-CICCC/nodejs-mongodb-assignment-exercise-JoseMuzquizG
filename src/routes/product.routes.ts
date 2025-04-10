import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router()

productRouter.get("/", productController.fetchAllProd)
productRouter.get("/:id", productController.fetchProdById)
productRouter.post("/", productController.createProd)
productRouter.put("/:id", productController.editProdById)
productRouter.delete("/:id", productController.deleteProd)


export default productRouter