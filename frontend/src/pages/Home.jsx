import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';

const Home = () => {

  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener los datos de los productos desde la API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products'); // Cambia la URL según tu backend
        
        if(!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo obtener los productos`);
        }
        
        const data = await response.json();
        setProducts(data); // Actualiza el estado con los productos
        setError(null);
      } catch (error) {
        setError(err.message);
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
              <input type="checkbox" id="gorras" />
              <label htmlFor="gorras">Gorras</label>
            </li>
            <li>
              <input type="checkbox" id="camisetas" />
              <label htmlFor="camisetas">Camisetas</label>
            </li>
            <li>
              <input type="checkbox" id="vaporizadores" />
              <label htmlFor="vaporizadores">Vaporizadores</label>
            </li>
            <li>
              <input type="checkbox" id="accesorios" />
              <label htmlFor="accesorios">Accesorios</label>
            </li>
            <li>
              <input type="checkbox" id="billeteras" />
              <label htmlFor="billeteras">Billeteras</label>
            </li>
          </ul>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Catálogo</h2>

          {/* mensaje de error si la API falla */}
          {error && <p className={styles.error}>{error}</p>}

          {/* mensaje si no hay productos */}
          {!error && products.length === 0 && <p>No hay productos disponibles.</p>}


          <div className={styles.grid}>
            {products.map(product => (
              <div key={product.id} className={styles.card}>
                <h3>{product.nombre}</h3>
                <p>{product.descriptcion}</p>
                <p><strong>${product.precio}</strong></p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home