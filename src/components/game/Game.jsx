import React, { useReducer, useEffect, useState, useLayoutEffect } from "react";
import styles from "./Game.module.css";
import Case from "../case/Case";
import avatar from "../../ressources/user.svg";
import finish from "../../ressources/finish.svg";
import { useHistory } from "react-router-dom";
import { initialValue, actions } from "../../utils/constant";
import { reducer, randomCase } from "./Game.utils";

const Game = ({ user }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [gameStyle, setGameStyle] = useState(styles.gameOne);
  const [cases, setCases] = useState("inactive");
  const [result, setResult] = useState([]);
  const [indexChoice, setIndexChoice] = useState(0);
  const [indexLight, setIndexLight] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [caseSelected, setCaseSelected] = useState();
  const [end, setEnd] = useState([false, 0]);
  let history = useHistory();

  useEffect(() => {
    if (!user || user === "") history.push("/");
  }, [history, user]);

  useEffect(() => {
    if (state.score !== 0) turnIA();
  }, [state.level]);

  useEffect(() => {
    const modulo = state.score % 5;
    if (modulo === 0 && state.score !== 0) {
      dispatch(actions.changeLevel);
    } else if (state.score !== 0) {
      turnIA();
    }
  }, [state.score]);

  useEffect(() => {
    switch (state.nbCase) {
      case 4:
        setGameStyle(styles.gameOne);
        break;
      case 9:
        setGameStyle(styles.gameTwo);
        break;
      case 16:
        setGameStyle(styles.gameThree);
        break;
      case 25:
        setGameStyle(styles.gameFour);
        break;
      case 36:
        setGameStyle(styles.gameFive);
        break;
      case 49:
        setGameStyle(styles.gameSix);
        break;
    }
  }, [state.nbCase]);

  const debutGame = () => {
    turnIA();
    setInProgress(true);
  };

  const turnIA = () => {
    const time = 500;
    const ref = [];
    let random = null;
    const timer = setInterval(() => {
      const index = randomCase(state.nbCase, random);
      random = index;
      ref.push(index);
      setIndexLight(index);
      setCases("IAturn");
    }, time);

    setTimeout(() => {
      clearInterval(timer);
      setResult(ref);
      setCases("userTurn");
    }, time * state.repeat + 250);
  };

  const validate = (id) => {
    setCaseSelected(parseInt(id));
    if (parseInt(id) === result[indexChoice]) {
      const newIndexChoice = indexChoice + 1;
      setIndexChoice(newIndexChoice);
      setCases("true");
      if (result.length === newIndexChoice) {
        setIndexChoice(0);
        dispatch(actions.addPoint);
      }
    } else {
      setEnd([true, state.score]);
      setGameStyle(styles.gameOne);
      setResult([]);
      setIndexChoice(0);
      setIndexLight(0);
      setCases("inactive");
      dispatch(actions.reset);
    }
  };

  const reset = () => {
    setInProgress(false);
    setEnd([false, 0]);
  }

  const userCases = () => {
    let casesArray = [];
    for (let index = 0; index < state.nbCase; index++) {
      casesArray.push(
        <Case
          onClick={(event) => validate(event.target.id)}
          height={state.caseSize}
          width={state.caseSize}
          type="selectionable"
          key={index}
          id={index}
        />
      );
    }
    return casesArray;
  };

  const inactiveCases = () => {
    let casesArray = [];
    for (let index = 0; index < state.nbCase; index++) {
      casesArray.push(
        <Case
          height={state.caseSize}
          width={state.caseSize}
          type="inactive"
          key={index}
          id={index}
        />
      );
    }
    return casesArray;
  };

  const IACases = () => {
    let casesArray = [];
    for (let index = 0; index < state.nbCase; index++) {
      if (index === indexLight) {
        casesArray.push(
          <Case
            height={state.caseSize}
            width={state.caseSize}
            type="active"
            key={indexLight}
          />
        );
      } else {
        casesArray.push(
          <Case
            height={state.caseSize}
            width={state.caseSize}
            type="inactive"
            key={index}
            id={index}
          />
        );
      }
    }
    return casesArray;
  };

  const selectedCases = () => {
    let casesArray = [];
    for (let index = 0; index < state.nbCase; index++) {
      if (index === caseSelected) {
        casesArray.push(
          <Case
            height={state.caseSize}
            width={state.caseSize}
            type="true"
            key={caseSelected}
          />
        );
      } else {
        casesArray.push(
          <Case
            onClick={(event) => validate(event.target.id)}
            height={state.caseSize}
            width={state.caseSize}
            type="selectionable"
            key={index}
            id={index}
          />
        );
      }
    }
    return casesArray;
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.profil}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <h2 className={styles.username}>{user}</h2>
        <h3 className={styles.points}>{state.score} PTS</h3>
      </div>
      <div className={gameStyle}>
        {cases === "inactive" && inactiveCases()}
        {cases === "IAturn" && IACases()}
        {cases === "userTurn" && userCases()}
        {cases === "true" && selectedCases()}
      </div>
      {!inProgress && (
        <div className={styles.infos}>
          <span className={styles.logo}>i</span>
          Le but du jeu est de mémoriser les cases qui s'allument afin de
          reproduire l'ordre par la suite. À chaque bon résultat, vous gagnez un
          point et le niveau d'après commence. Bonne chance !
          <button className={styles.button} onClick={() => debutGame()}>
            Commencer
          </button>
        </div>
      )}
      {end[0] &&
        <div className={styles.popup}>
          <div className={styles.modal}>
            <img src={finish} alt="finish" className={styles.finish} />
            <h2 className={styles.finishTitle}>PARTIE TERMINÉ !</h2>
            <p className={styles.finishText}>Votre score : {end[1]}</p>
            <button className={styles.return} onClick={reset}>REVENIR</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Game;
