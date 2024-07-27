import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl} from "../../utils"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contactame</h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gmail.png")} alt="email" />
                <a href="mailto:wladimirburgos42@gmail.com">Wladimirburgos42@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="linkedin" />
                <a href="https://www.linkedin.com/in/wladimir-burgos/">Wladimir burgos</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/instagram.png")} alt="instagram" />
                <a href="https://www.instagram.com/setsunaky?igsh=MXhoaDRvcmtsd2Vpdw==">@wladimir</a>
            </li>
        </ul>
    </footer>
  )
}
