import React, { Component } from "react";
import MapElement from "./MapElement";
import { Jumbotron, Media, Button, FormGroup, FormControl, Tabs, Tab } from "react-bootstrap";
import '../JourneyMap.css'
import Background from "../backgroundImages/beach.jpg";

var backgroundStyle = {
	width: "100%",
	height: "1500px",
	backgroundSize: "cover",

	backgroundColor: '#fff'
};

export default class JourneyMap extends Component {
	render() {
		console.log(this.props)
		return (
			<div style={backgroundStyle}>
				<Media.Heading>
					<img
						style={{ width: "20%", height: "20%", margin: "30px" }}
						src={require("../logo/easyJourneyLogoBlack.png")}
						alt="thumbnail"
					/>
				</Media.Heading>
				<div align="center">
					<MapElement
						googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAI3-3TxYKBG7mGe4w6OovA2hvmthCse5s&v=3.exp&libraries=geometry,drawing,places`}
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={
							<div style={{ height: `100vh`, width: `100%` }} />
						}
						mapElement={<div style={{ height: `100%` }} />}
						starting={this.props.starting}
						ending={this.props.ending}
					/>
				</div>
				<div id="bootstrap-journey" className="journeyform" >
					<div style={{backgroundColor: '#f2f2f2', borderRadius: 10, width:"1300px", height:"650px"}}>
						<h1>{this.props.destination}</h1>
						<Tabs className="myTabs" defaultActiveKey={1} id="uncontrolled-tab-example">
						  <Tab eventKey={1} title="In the next week">
						    Tab 1 content
						  </Tab>
						  <Tab eventKey={2} title="In the next month">
						    Tab 2 content
						  </Tab>
						  <Tab eventKey={3} title="In the next year">
						    Tab 3 content
						  </Tab>
						</Tabs>
					</div>

				</div>
			</div>
		);
	}
}
