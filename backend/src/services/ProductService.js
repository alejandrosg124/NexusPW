import pool from '../config/db.js';

const ProductService = {
    async getAllProducts() {
        try{
            const result = await pool.query("SELECT id, nombre, descripcion, precio, fotos FROM productos");

            return result.rows.map(producto => ({
                id: producto.id,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                precio: producto.precio,
                fotos: producto.fotos
            }))
        } catch {
            throw error;
        }
    },

    async getProductByID(id) {
        try {
            const result = await pool.query("SELECT id, nombre, descripcion, precio, fotos FROM productos WHERE id=$1", [id]);
            if (rows.lenght === 0) {
                return console.log("Producto no encontrado");
            }
            return result.rows[0];
        } catch {
            throw error;
        }
    }
}

export default ProductService;