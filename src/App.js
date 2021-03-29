import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import Transition from "./components/transition/Transition";
import Notfound from "./components/notfound/Notfound";

function App() {
  const [user, setUser] = useState();
  const [launch, setLaunch] =  useState(false);

  const userChange = name => setUser(name);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home debutGame={userChange} setLaunch={setLaunch} />
          </Route>
          <Route path="/game">
            <Game user={user} />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
      <Transition launch={launch} launchAnimation={setLaunch} />
    </div>
  );
}

export default App;
