import React from "react";
import styles from "./Case.module.css";
import success from "../../ressources/success.svg";

const Case = ({ type, height, width, onClick, id }) => {
    const style = () => {
        switch (type) {
            case "active":
                return styles.active;
            case "true":
                return styles.true;
            case "inactive":
                return styles.inactive;
            case "selectionable":
                return styles.selectionable;
            default: 
                return styles.inactive;
        }
    }

    return <div id={id} onClick={onClick} style={{ height, width }} className={style()}>
        {type === "true" &&
            <img src={success} alt="success" className={styles.success} />
        }
    </div>
}

export default Case;