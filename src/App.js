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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState();

  const userChange = name => setUser(name);
  const error = message => toast("❎" + message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home debutGame={userChange} onError={error} />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
