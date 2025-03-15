import express from 'express';
const router = express.Router();
import ProductController from '../controllers/ProductController.js';

router.get('/productos', ProductController.getAllProducts);

export default router;