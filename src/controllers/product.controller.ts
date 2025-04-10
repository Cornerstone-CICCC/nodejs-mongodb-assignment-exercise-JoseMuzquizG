import { Request, Response } from "express";
import { Product, IProduct } from "../models/product.model";

// Create new Product

const createProd = async (req: Request<{}, {}, IProduct>, res: Response) => {
    try {
        const { productName, productPrice } = req.body
        const product = await Product.create({ productName, productPrice }) 
        res.status(201).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to create new product."})
    }
}

const fetchAllProd = async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.status(201).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to fetch all products"})
    }
}

const fetchProdById = async (req: Request<{id: string}>, res: Response) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            res.status(404).json({ message: "Product not found" })
            return
          }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to fetch single product"})
    }
}

const deleteProd = async (req: Request<{id: string}>, res: Response) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            res.status(404).json({ message: "Product not found" })
            return
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to delete product"})
    }
}

const editProdById = async (req: Request<{id: string}, {}, Partial<IProduct> >, res: Response) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: "Unable to edit product"})
    }
}

export default {
    createProd,
    fetchAllProd,
    fetchProdById,
    deleteProd,
    editProdById
}