import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchData } from '../api';

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetchData (api/productos/{ id });
                const data = await response.json();
                if (data) {
                    setProducto(data);
                } else {
                    console.log("No existe el producto");
                }
            } catch {
                setError("Error al cargar el producto");

            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, [id]);
    return(
        <>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <img src={producto.fotos} alt={producto.nombre} />
        <p>{producto.precio}</p>
        </>
    )
}

export default DetalleProducto;