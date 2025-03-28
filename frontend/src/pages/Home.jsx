import React, { useEffect, useState } from 'react'
import { fetchData } from '../api';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData("api/productos");

      if (data) {
        setProducts(data);
        setError(null);
      } else {
        setError("No se pudieron obtener los productos");
      }
    };

    fetchProducts();
  }, []);

  const handleClick = () => {
    window.open("https://www.instagram.com/nexusfusionka/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.shippingInfo}>
          <p>Por ahora solo tenemos envíos a <span className={styles.location}>Cali, Colombia</span></p>
        </div>

        <button onClick={handleClick} className={styles.botonIg}>
          🔗 Instagram
        </button>

        <div className={styles.categories}>
          <h3>Categorías</h3>
          <ul>
            <li>
              <input type="checkbox" id="gorras" checked readOnly />
              <label htmlFor="gorras">Gorras</label>
            </li>
          </ul>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.title}>Lo más destacado</h2>

          {/* mensaje de error si la API falla */}
          {error && <p className={styles.error}>{error}</p>}

          {/* mensaje si no hay productos */}
          {!error && products.length === 0 && <p>No hay productos disponibles.</p>}


          <div className={styles.grid}>
            {products.map(producto => (
              <Link to={`/producto/${producto.id}`} key={producto.id} className={styles.card}>
                <img src={producto.fotos} alt={producto.nombre} className={styles.fotoProducto}/>
                <h3 className={styles.nombreProducto}>{producto.nombre}</h3>
                <p className={styles.precioProducto}>${producto.precio}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home