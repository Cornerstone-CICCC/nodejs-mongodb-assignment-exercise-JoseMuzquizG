"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product.model");
// Create new Product
const createProd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, productPrice } = req.body;
        const product = yield product_model_1.Product.create({ productName, productPrice });
        res.status(201).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to create new product." });
    }
});
const fetchAllProd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.find();
        res.status(201).json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to fetch all products" });
    }
});
const fetchProdById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to fetch single product" });
    }
});
const deleteProd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to delete product" });
    }
});
const editProdById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to edit product" });
    }
});
exports.default = {
    createProd,
    fetchAllProd,
    fetchProdById,
    deleteProd,
    editProdById
};
