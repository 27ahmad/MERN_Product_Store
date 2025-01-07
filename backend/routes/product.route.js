import express from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controller/product.controller.js';

const router = express.Router();

export default router;

router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.get('/', getProducts);
router.put("/:id", updateProduct);