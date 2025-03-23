import React, { useEffect, useState } from 'react'
import { fetchData } from '../api';
import { useParams } from "react-router-dom";
import Carousel from '../utils/Carousel';

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
          try {
            const data = await fetchData(`api/productos/${id}`);
            if (data) {
                setProducto(data);
                setError(null);
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
    if (!producto) return <p>Cargando...</p>;


    return(
        <>
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        {producto.fotos && <Carousel images={producto.fotos} />}
        <p>{producto.precio}</p>
        </>
    )
}

export default DetalleProducto;