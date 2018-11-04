import React, { Component } from "react";
import { NavLink } from "react-router-dom";


import {
	Jumbotron,
	Media,
	Button,
	FormGroup,
	FormControl
} from "react-bootstrap";

import "../Home.css";

import Background from "../backgroundImages/beach.jpg";

import LocationSearchInput from "./LocationSearchInput";

var backgroundStyle = {
	width: "100%",
	height: "100vh",
	backgroundSize: "cover",

	backgroundImage: `url(${Background})`
};

class Home extends Component {
	// handleStart = latlng => {
	// 	this.setState({ starting: latlng });
	// 	console.log(this.state)
	// };

	// handleEnd = latlng => {
	// 	this.setState({ ending: latlng });
	// 	console.log(this.state)
	// };

	journey = e => {
		e.preventDefault();
		this.props.history.push("/journey");

	};

	quiz = e => {
		e.preventDefault();
		this.props.history.push("/quiz");
	};

	render() {
		return (

			<div style={backgroundStyle}>
				<Media.Heading>
					<img
						style={{ width: "20%", height: "20%", margin: "30px" }}
						src={require("../logo/easyJourneyLogoWhite.png")}
						alt="thumbnail"
					/>
				</Media.Heading>
				{/*<Jumbotron>
					<h1>Hello, world!</h1>
					<p>
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<p>
						<Button bsStyle="primary">Learn more</Button>
					</p>
				</Jumbotron>*/}

				<div id="bootstrap-overrides" className="lefthead">
					<h1>Search our cheapest flights.</h1>
					<h1>Simple, efficient, easy.</h1>
					<h3>
						Can't decide where to roam? We've got you covered.
					</h3>

					<br />
					<br />
					<button
						onClick={this.quiz}

						className="buttonQuiz"
					>
						Take the quiz!
					</button>
				</div>

				<div id="bootstrap-overrides" className="form">
					<form
						style={{
							backgroundColor: "#fff",
							width: "550px",
							height: "330px",

						}}
					>
						<h2>Enter a location</h2>
						<div><FormGroup bsSize="large">
							<LocationSearchInput
								placeholder={"Where from?"}
								type="start"
								handleStart={this.props.handleStart}
								setOrigin={this.props.setOrigin}
							/>
							<LocationSearchInput
								placeholder={"Where to?"}
								type="end"
								handleEnd={this.props.handleEnd}
								setDestination={this.props.setDestination}
							/>
							{/*<FormControl type="text" placeholder="Where from?" style={{color:"black"}}/>*/}
						</FormGroup></div>
						<FormGroup bsSize="large">
							{/*<FormControl
								type="text"
								placeholder="Where to?"
								style={{color:"black"}}
							/>*/}
						</FormGroup>
						<button
							onClick={this.journey}
							className="buttonSearch"
							style={{ margin: 10 }}
						>
							Search
						</button>
					</form>
				</div>
			</div>

		);
	}
}

export default Home;
