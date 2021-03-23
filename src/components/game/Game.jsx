import React, { useState, useEffect } from "react";
import styles from "./Game.module.css";
import { Pane, Avatar, Pill } from "evergreen-ui";
import { useHistory } from "react-router-dom";

const dataTest = [
    {
        username: "Ted",
        score: 42000
    },
    {
        username: "Nul",
        score: 1
    }
];

const Game = ({ user, launchAnimation }) => {
  const [score, setScore] = useState(0);
  const [bestPlayers, setBestPlayers] = useState(dataTest);
  let history = useHistory();

  useEffect(() => {
    if (!user || user === "") history.push("/");
  }, [history, user]);

  useEffect(() => {
      // GET (pensez à créer le GET)
  }, []);

  /*const ranked = bestPlayers.map((player) => (
    <p key={player.key}>
      <span className={styles.rank}>{player.score}</span> - {player.username}
    </p>
  ));*/

  return (
    <div>
      <div className={styles.profil}>
        <Pane>
          <Avatar color="green" name={user} size={50} />
          <Pill isSolid color="green">
            {score}
          </Pill>
        </Pane>
      </div>
      <div className={styles.ranking}>
        <h2 className={styles.rankingTitle}>CLASSEMENT</h2>
      </div>
    </div>
  );
};

export default Game;
