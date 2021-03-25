import React, { useReducer, useEffect, useState, useLayoutEffect } from "react";
import styles from "./Game.module.css";
import { Avatar, Pill, Badge } from "evergreen-ui";
import { useHistory } from "react-router-dom";
import { initialValue, actions } from "../../utils/constant";
import { reducer, randomCase, inactiveCases, IACases, userCases  } from "./Game.utils";

const Game = ({ user, launchAnimation }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [gameStyle, setGameStyle] = useState(styles.gameOne);
  const [cases, setCases] = useState([]);
  const [result, setResult] = useState([]);
  let history = useHistory();

  useEffect(() => {
    setCases(inactiveCases(state));
  }, []);

  useEffect(() => {
    if (!user || user === "") history.push("/");
  }, [history, user]);

  useEffect(() => {
    const modulo = state.score % 5;
    if (modulo === 0 && state.score !== 0) dispatch(actions.changeLevel);
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
    inactiveCases(state);
  }, [state.nbCase]);

  const turnIA = () => {
    const timer = setInterval(() => {
      const index = randomCase(state.nbCase);
      result.push(index);
      setCases(IACases(index, cases, state));
    }, 500);

    setTimeout(() => {
      clearInterval(timer);
      result.pop();
      setCases(userCases(validate, state));
    }, state.seconds);
  }

  const validate = (id) => {
    // CONDITION : 
    /**
     * Si id === result[0] {
     *    remove premier dans result
     *    if (result.length === 0) {
     *        victory
     *    }
     * }
     * Sinon echec defaite
     * 
     * Pensez à update case avec true et false
     */
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.profil}>
        <Avatar color="green" name={user} size={50} />
        <div className={styles.ranking}>
          <Badge color="green">Niveau {state.level}</Badge>
          <Pill isSolid color="green">
            {state.score} pts
          </Pill>
        </div>
      </div>
      <div className={gameStyle}>{cases}</div>
      <button onClick={() => turnIA()}>GO</button>
    </div>
  );
};

export default Game;
