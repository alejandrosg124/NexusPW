import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';

const Home = () => {

  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  useEffect(() => {
    // Obtener los datos de los productos desde la API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products'); // Cambia la URL según tu backend
        const data = await response.json();
        setProducts(data); // Actualiza el estado con los productos
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.shippingInfo}>
          <p>Por ahora solo tenemos envíos a <span className={styles.location}>Cali, Colombia</span></p>
        </div>

        <div className={styles.categories}>
          <h3>Categorías</h3>
          <ul>
            <li>
              <input type="checkbox" id="accesorios" />
              <label htmlFor="accesorios">Accesorios</label>
            </li>
            <li>
              <input type="checkbox" id="vaporizadores" />
              <label htmlFor="vaporizadores">Vaporizadores</label>
            </li>
          </ul>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>Promos</h2>
          <div className={styles.grid}>
            {products.map(product => (
              <div key={product.id} className={styles.card}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>${product.price}</strong></p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home