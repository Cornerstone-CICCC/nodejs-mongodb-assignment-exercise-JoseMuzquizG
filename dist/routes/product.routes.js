"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const productRouter = (0, express_1.Router)();
productRouter.get("/", product_controller_1.default.fetchAllProd);
productRouter.get("/:id", product_controller_1.default.fetchProdById);
productRouter.post("/", product_controller_1.default.createProd);
productRouter.put("/:id", product_controller_1.default.editProdById);
productRouter.delete("/:id", product_controller_1.default.deleteProd);
exports.default = productRouter;
