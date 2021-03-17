import React from "react";
import styles from "./Notfound.module.css";

const Notfound = () => {
    return <div className={styles.background}>
        <h2 className={styles.title}>
            <span className={styles.green}>4</span>
            <span className={styles.gradient}>0</span>
            <span className={styles.white}>4</span>
        </h2>
        <h3 className={styles.subtitle}>Error</h3>
        <p className={styles.explain}>Vérifiez l'URL saisie, il est fort probable que vous vous soyez trompé.</p>
    </div>
}

export default Notfound;