import React, { useState, useEffect } from "react";
import styles from "./Game.module.css";
import { Pane, Avatar, Pill } from "evergreen-ui";
import { useHistory } from "react-router-dom";

const Game = ({ user, launchAnimation }) => {
  const [score, setScore] = useState(0);
  let history = useHistory();

  useEffect(() => {
    if (!user || user === "") history.push("/");
  }, [history, user]);

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
    </div>
  );
};

export default Game;
