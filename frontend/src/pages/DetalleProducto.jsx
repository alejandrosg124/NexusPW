import React, { useEffect, useState } from 'react'
import { fetchData } from '../api';
import { useParams } from "react-router-dom";
import Carousel from '../utils/Carousel';
import styles from './DetalleProducto.module.css';
import { Link } from 'react-router-dom';

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [productosSimilares, setProductosSimilares] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
          try {
            const data = await fetchData(`api/productos/${id}`);
            if (data) {
                setProducto(data);
                setError(null);
                
                // Obtener productos similares (excluyendo el actual)
                const similares = await fetchData('api/productos');
                setProductosSimilares(similares.filter(p => p.id !== data.id));
              } else {
                setError("Producto no encontrado");
              }
            } catch (error) {
                setError("Error al obtener el producto: " + error.message);
            }
        };
    
        fetchProducto();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!producto) return <div className={styles.loading}></div>;


    return (
      <div className={styles.contenedor}>
          {/* Sección principal con imagen grande y detalles */}
          <div className={styles.detalleProducto}>
              <img className={styles.imagenProducto} src={producto.fotos} alt={producto.nombre} />
              <div className={styles.infoProducto}>
                  <h1 className={styles.titulo}>{producto.nombre}</h1>
                  <p className={styles.precio}>${producto.precio}</p>
                  <p className={styles.descripcion}>{producto.descripcion}</p>
              </div>
          </div>

          {/* Sección de productos similares */}
          <div className={styles.masArticulos}>
              <h2 className={styles.tituloMasArticulos}>Más artículos como este</h2>
              <div className={styles.listaProductos}>
                  {productosSimilares.map((prod) => (
                    <Link to={`/producto/${prod.id}`} key={prod.id} className={styles.itemProducto}>
                        <img className={styles.imagenMiniatura} src={prod.fotos} alt={prod.nombre} />
                        <p className={styles.nombreProducto}>{prod.nombre}</p>
                        <p className={styles.precioProducto}>${prod.precio}</p>
                    </Link>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default DetalleProducto;
