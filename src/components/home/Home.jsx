import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Home.module.css";
import Case from "../case/Case";

const Home = ({ debutGame, setLaunch }) => {
    const [caseType, setCaseType] = useState("inactive");
    const [name, setName] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [inputStyle, setInputStyle] = useState(styles.input);
    let history = useHistory();

    const validate = () => {
        setErrorMessage();
        setInputStyle(styles.input);
        if (!name) {
            error("Vous devez écrire un surnom pour pouvoir jouer.");
        } else if (name.trim() === "") {
            error("Votre surnom ne peux pas être rempli que d'espace, choisissez un autre surnom.");
        } else {
            setLaunch(true);
            debutGame(name);
            setTimeout(() => {
                history.push("/game");
            }, 2400);
        }
    }

    const error = message => {
        setErrorMessage(message);
        setInputStyle(styles.inputError);
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
            <Case type={caseType} height={45} width={45} />
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
                className={inputStyle} 
            />
            {errorMessage &&
                <p className={styles.error}>{errorMessage}</p>
            }
        </div>
        <button className={styles.button} onClick={validate}>Commencer</button>
    </div>
}

export default Home;
