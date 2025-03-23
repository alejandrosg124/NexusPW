import ProductService from '../services/ProductService.js';

const ProductController = {
    async getAllProducts(req, res) {
        try {
            const productos = await ProductService.getAllProducts();
            res.json(productos);
        } catch (error) {
            console.log("Error al obtener productos", error);
            res.status(500).json({ error: "Error al obtener productos" });
        }
    },

    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const producto = await ProductService.getProductById(id);
            if (!producto) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }
            res.json(producto);
        } catch (error) {
            console.log("Error al obtener producto", error);
            res.status(500).json({ error: "Error al obtener producto" });
        }
    }
}

export default ProductController;