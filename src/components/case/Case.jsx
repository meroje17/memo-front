import React from "react";
import styles from "./Case.module.css";

const Case = ({ type }) => {
    switch (type) {
        case "active":
            return <div className={styles.active} />
        case "true":
            return <div className={styles.true} />
        case "false":
            return <div className={styles.false} />
        case "inactive":
            return <div className={styles.inactive} />
        default: 
            return <div className={styles.inactive} />
    }
}

export default Case;