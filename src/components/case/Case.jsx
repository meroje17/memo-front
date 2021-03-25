import React from "react";
import styles from "./Case.module.css";

const Case = ({ type, height, width, onClick, id }) => {
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
            case "selectionable":
                return styles.selectionable;
            default: 
                return styles.inactive;
        }
    }

    return <div id={id} onClick={onClick} style={{ height, width }} className={style()} />
}

export default Case;