import React, { useEffect } from "react";
import styles from "./Notfound.module.css";
import spinner from "../../ressources/spinner.svg";
import { useHistory } from "react-router-dom";

const Notfound = () => {
    let history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            history.push("/");
        }, 5000);
        return () => clearTimeout(timer);
    }, [history])

    return <div className={styles.background}>
        <h2 className={styles.title}>
            <span className={styles.green}>4</span>
            <span className={styles.gradient}>0</span>
            <span className={styles.white}>4</span>
        </h2>
        <h3 className={styles.subtitle}>Error</h3>
        <p className={styles.explain}>Oups... Vous allez être redirigé vers l'accueil.</p>
        <img className={styles.spinner} src={spinner} />
    </div>
}

export default Notfound;