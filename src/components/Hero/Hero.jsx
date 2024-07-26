import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, soy wladimir</h1>
            <p className={styles.description}>
            Soy desarrollador full-stack con 2 años de experiencia (no formal) usando Python entre otros lenguajes.
            </p>
            <a href="mailto:wladimirburgos42@gmail.com" className={styles.contactBtn}>Contactame</a>
        </div>
        <img src={getImageUrl("hero/hero.jpg")} alt="hero imagen" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
