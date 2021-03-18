import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import Notfound from "./components/notfound/Notfound";

function App() {
  const [user, setUser] = useState();

  const userChange = name => setUser(name);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home debutGame={userChange} />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
