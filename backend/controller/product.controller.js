import mongoose from 'mongoose';
import Product from '../models/product_model.js';


export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProducts = async (req, res) => { 

    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No product with that id");
    }
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updateProduct, message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No product with that id");
    }

    try {
        await Product.findByIdAndDelete(id);
        res.json({ message: "Product deleted successfully" });
        
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}