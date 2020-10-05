import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from "./components/Chart";
import Chart2 from "./components/Chart2";
import DisplayResult from "./components/DisplayResult";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Chart2} />
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route
              path="/DisplayResult/:year"
              exact
              component={DisplayResult}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
