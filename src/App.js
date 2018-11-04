import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./Components/Home";
import JourneyMap from "./Components/JourneyMap";
import Quiz from "./Components/Quiz";
import NavBar from "./Components/NavBar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFlights: {},
      origin: "Houston, TX, USA",
      destination:"Los Angeles, CA, USA",
      starting: { lat: 36.05298765935, lng: -112.083756616339 },
      ending: { lat: 36.2169884797185, lng: -112.056727493181 }
    };
  }

  handleStart = latlng => {
    this.setState({ starting: latlng });
    console.log(this.state)
  };


  setFlights = data => {
    this.setState({ allFlights: data})
    console.log(this.state)
  }


  setDestination = address => {
    this.setState({destination: address})
    console.log(this.state)
  }

  setOrigin = address => {
    this.setState({origin: address})
  }

  handleEnd = latlng => {
    this.setState({ ending: latlng });
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" render={(props) => <Home {...props} journey={this.journey} setFlights={this.setFlights} handleEnd={this.handleEnd} handleStart={this.handleStart} setDestination={this.setDestination} setOrigin={this.setOrigin}/>} />
            <Route exact path="/journey" render={(props) => <JourneyMap {...props} allFlights={this.state.allFlights} setFlights={this.setFlights} origin={this.state.origin} destination={this.state.destination} starting={this.state.starting} ending={this.state.ending}/>} />
            <Route exact path="/quiz" render={(props) => <Quiz {...props}/>} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
