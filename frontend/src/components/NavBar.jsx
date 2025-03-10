import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { CiSearch } from "react-icons/ci";
import logo from '../media/1.png';

const NavBar = () => {

    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImage} />
            </div>
          
            <div className={styles.separator}></div>

            <div className={styles.searchContainer}>
                <CiSearch className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Accesorios"
                    className={styles.searchInput}
                />
            </div>

            <ul className={styles.navLinks}>
              <li><Link to="/" className={styles.navLink}>Home</Link></li>
              <li><Link to="/promos" className={styles.navLink}>Promos</Link></li>
              <li><Link to="/contactanos" className={styles.navLink}>Contáctanos</Link></li>
            </ul>

            <button className={styles.loginButton}>Iniciar Sesión</button>
        </nav>
      );
}

export default NavBar