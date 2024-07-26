import React, {useState} from 'react'

import styles from "./Navbar.module.css"
import { getImageUrl } from '../../utils'


export const Navbar = () => {
    const [menuOpen, setMenuopen] = useState(false);

  return(
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>
            Portafolio
        </a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={
                    menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                }
                alt='menu-button'
                onClick={() => setMenuopen(!menuOpen)}
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">Sobre mi</a>
                </li>
                <li>
                    <a href="#experience">Experiencia</a>
                </li>
                <li>
                    <a href="#projects">Proyectos</a>
                </li>
                <li>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
