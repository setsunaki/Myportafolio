import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Sobre mi</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/About.png")} 
            alt="Me sitting"
            className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} 
                    alt="Cursor Icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Desarrollador Frontend</h3>
                        <p>
                        Como desarrollador frontend, tengo conocimientos en React y Angular 
                        para la creación de proyectos personales.
                        </p>
                    </div>
                    
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} 
                    alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Desarrollador Backend</h3>
                        <p>
                        Como desarrollador backend, tengo conocimientos de Python(Django), NodeJs(Express), PHP(Laravel) y Java(Spring Boot) 
                        para la creación de proyectos personales (API's). Aunque personalmente utilizo más Python y NodeJs.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} 
                    alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Diseñador UI</h3>
                        <p>
                        Actualmente estoy aprendiendo a diseñar páginas web en Figma; de igual forma 
                        he utilizado Balsamiq para diseñar el maquetado de proyectos.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
