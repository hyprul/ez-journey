import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./Components/Home";
import JourneyMap from './Components/JourneyMap'
import NavBar from "./Components/NavBar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/journey" component={JourneyMap} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
