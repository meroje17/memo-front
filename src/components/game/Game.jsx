import React, { useReducer, useEffect, useState, useLayoutEffect } from "react";
import styles from "./Game.module.css";
import Case from "../case/Case";
import Avatar from "../../ressources/user.svg";
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
  let history = useHistory();

  useEffect(() => {
    if (!user || user === "") history.push("/");
  }, [history, user]);

  useEffect(() => {
    const modulo = state.score % 5;
    if (modulo === 0 && state.score !== 0) dispatch(actions.changeLevel);
    if (state.score !== 0) turnIA();
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
    dispatch(actions.reset);
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
    if (parseInt(id) === result[indexChoice]) {
      const newIndexChoice = indexChoice + 1;
      setIndexChoice(newIndexChoice);
      if (result.length === newIndexChoice) {
        setIndexChoice(0);
        dispatch(actions.addPoint);
        console.log("Victoire 😀");
      }
    } else {
      console.log("Défaite 😒");
      setInProgress(false);
      setCases("inactive");
      setGameStyle(styles.gameOne);
      setResult([]);
      setIndexChoice(0);
      setIndexLight(0);
      // Pensez à mettre case à false
    }
  };

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

  return (
    <div className={styles.gameContainer}>
      <div className={styles.profil}>
        <img className={styles.avatar} src={Avatar} alt="avatar" />
        <div className={styles.ranking}>
          <div className={styles.level}>Niveau {state.level}</div>
          <div className={styles.points}>{state.score} PTS</div>
        </div>
      </div>
      <div className={gameStyle}>
        {cases === "inactive" && inactiveCases()}
        {cases === "IAturn" && IACases()}
        {cases === "userTurn" && userCases()}
      </div>
      {!inProgress && (
        <div className={styles.infos}>
          <button className={styles.button} onClick={() => debutGame()}>
            Commencer
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
