import React from "react";
import NavBar from "./components/NavBar";
import Your from "./components/YourCard";
import All from "./components/AllCards";
import Blocked from "./components/BlockedCards";
import { Route, Switch } from "react-router";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={All} />
        <Route exact path="/your" component={Your} />
        <Route exact path="/blocked" component={Blocked} />
      </Switch>
    </div>
  );
};

export default App;
