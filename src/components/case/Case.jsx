import React from "react";
import styles from "./Case.module.css";

const Case = ({ type, height, width }) => {
    const style = () => {
        switch (type) {
            case "active":
                return styles.active;
            case "true":
                return styles.true;
            case "false":
                return styles.false;
            case "inactive":
                return styles.inactive;
            default: 
                return styles.inactive;
        }
    }

    return <div style={{ height, width }} className={style()} />
}

export default Case;