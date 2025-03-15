import ProductService from '../services/ProductService.js';

const ProductController = {
    async getAllProducts(req, res) {
        try{
            const productos = await ProductService.getAllProducts();
            res.json(productos);
        } catch (error) {
            console.log("Error al obtener productos")
        }
    }
}

export default ProductController;