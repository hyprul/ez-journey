import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./Components/Home";
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
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
