import React, { Component } from "react";
import { Parallax } from "react-materialize";
import { NavLink } from "react-router-dom";
import { Jumbotron, Media, Button, FormGroup, FormControl } from "react-bootstrap";

import "../Home.css";

import Background from "../backgroundImages/beach.jpg";

var backgroundStyle = {
	width: "100%",
	height: "100vh",
	backgroundSize: "cover",

	backgroundImage: `url(${Background})`
};

class Home extends Component {
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
						Or let us match you to a destination based on your
						preferences
					</h3>

					<br />
					<br />
					<Button bsSize="large" bsStyle="info" style={{borderRadius: 10}}>Take The Quiz</Button>
				</div>

				<div id="bootstrap-overrides" className="form">
					<form style={{backgroundColor: '#fff', borderRadius: 20, width:"550px", height:"350px"}}>
						<h2>Enter a Location</h2>
						<FormGroup bsSize="large">
							<FormControl type="text" placeholder="Where from?" style={{color:"black"}}/>
						</FormGroup>
						<FormGroup bsSize="large">
							<FormControl
								type="text"
								placeholder="Where to?"
								style={{color:"black"}}
							/>
						</FormGroup>
						  <Button bsStyle="success" bsSize="large" style={{margin: 10}}>Search</Button>
					</form>
				</div>
			</div>
		);
	}
}



export default Home;
