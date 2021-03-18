import React, { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import Case from "../case/Case";

const Home = ({ debutGame }) => {
    const [caseType, setCaseType] = useState("inactive");
    const [name, setName] = useState();

    const validate = () => {
        if (!name) {
            error("Vous devez écrire un surnom pour pouvoir jouer.");
        } else if (name.trim() === "") {
            error("Votre surnom ne peux pas être rempli que d'espace, choisissez un autre surnom.");
        } else {
            debutGame(name);
        }
    }

    const error = message => {
        // FAIRE SYSTEM ERROR dans composant parent
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (caseType === "inactive") {
                setCaseType("active");
            } else {
                setCaseType("inactive");
            }
        }, 700);
        return () => clearInterval(timer);
    }, [caseType])

    return <div className={styles.home}>
        <div className={styles.baner}>
            <h1 className={styles.websiteTitle}>
                <span className={styles.green}>M</span>
                <span className={styles.gradient}>EM</span>
                <span className={styles.white}>O</span>
            </h1>
            <Case type={caseType} />
        </div>
        <div className={styles.centered}>
            <h3 className={styles.description}>Prêt à affronter vos amis, votre famille et même des inconnus ?</h3>
            <h3 className={styles.description}>Ce jeu défie votre capacité de <span className={styles.bold}>mémorisation.</span></h3>
            <h3 className={styles.description}>Qui sera le <span className={styles.bold}>vainqueur</span> ? Puisse le sort vous être favorable.</h3>
        </div>
        <div className={styles.nickname}>
            <label htmlFor="nickname" className={styles.subtitle}>Choisissez votre surnom !</label>
            <input type="text" 
                id="nickname" 
                placeholder="Entrez votre surnom" 
                onChange={(event) => setName(event.target.value)} 
                className={styles.input} 
            />
        </div>
        <button className={styles.button} onClick={validate}>Commencer</button>
    </div>
}

export default Home;
