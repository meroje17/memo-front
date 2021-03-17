import React from "react";
import styles from "./Notfound.module.css";

const Notfound = () => {
    return <div className={styles.background}>
        <h2 className={styles.title}>
            <span className={styles.green}>4</span>
            <span className={styles.gradient}>0</span>
            <span className={styles.white}>4</span>
        </h2>
        <h2 className={styles.subtitle}>Error</h2>
        <h2 className={styles.explain}>Vérifiez l'URL saisie, il est fort probable que vous vous soyez trompé.</h2>
    </div>
}

export default Notfound;