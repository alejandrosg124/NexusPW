import express from 'express';
const router = express.Router();
import ProductController from '../controllers/ProductController.js';

router.get('/productos', ProductController.getAllProducts);
router.get('/productos/:id', ProductController.getProductById);

export default router;
