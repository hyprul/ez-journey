import React, { Component } from "react";
import MapElement from "./MapElement";
import {
	Jumbotron,
	Media,
	Button,
	FormGroup,
	FormControl,
	Tabs,
	Table,
	Tab
} from "react-bootstrap";
import "../JourneyMap.css";
import Background from "../backgroundImages/beach.jpg";

var backgroundStyle = {
	width: "100%",
	height: "1500px",
	backgroundSize: "cover",

	backgroundColor: "#fff"
};

export default class JourneyMap extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		console.log("==================");
		console.log(this.props.origin.split(",")[0].toLowerCase());
		console.log(this.props.destination.split(",")[0].toLowerCase())
		console.log("==================");
		fetch("http://localhost:3001/flights", {
			method: "POST",
			body: JSON.stringify({
				from: this.props.origin.split(",")[0].toLowerCase(),
				to: this.props.destination.split(",")[0].toLowerCase()
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => this.props.setFlights(data))
			.then(this.setState({ loading: false }));
	}

	render() {
		console.log(this.props);
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

				<div id="bootstrap-journey" className="journeyform">
					<form
						style={{
							backgroundColor: "#f2f2f2",
							borderRadius: 10,
							width: "1300px",
							height: "650px"
						}}
					>
						<h1>
							{this.props.origin} ===> {this.props.destination}
						</h1>


						{Object.keys(this.props.allFlights).length === 0 ? (
							<h1>Loading Flights</h1>
						) : (
							<Tabs
								className="myTabs"
								defaultActiveKey={1}
								id="uncontrolled-tab-example"
							>
								<Tab eventKey={1} title="In the next week">
									<Table responsive>
										<thead>
											<tr>
											<th>Price (USD)</th>
												<th>Airline #</th>
								
												<th>Airline</th>
												<th>Direct</th>
												<th>Departure Date (YYYY/MM/DD)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>${this.props.allFlights.week[0].MinPrice}</td>
												<td>{this.props.allFlights.week[0].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.week[0].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.week[0].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.week[0].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.week[1].MinPrice}</td>
												<td>{this.props.allFlights.week[1].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.week[1].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.week[1].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.week[1].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.week[2].MinPrice}</td>
												<td>{this.props.allFlights.week[2].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.week[2].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.week[2].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.week[2].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.week[3].MinPrice}</td>
												<td>{this.props.allFlights.week[3].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.week[3].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.week[3].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.week[3].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.week[4].MinPrice}</td>
												<td>{this.props.allFlights.week[4].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.week[4].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.week[4].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.week[4].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
										</tbody>
									</Table>
									
								</Tab>
								<Tab eventKey={2} title="In the next month">
									<Table responsive>
										<thead>
											<tr>
											<th>Price (USD)</th>
												<th>Airline #</th>
								
												<th>Airline</th>
												<th>Direct</th>
												<th>Departure Date (YYYY/MM/DD)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>${this.props.allFlights.current_month[0].MinPrice}</td>
												<td>{this.props.allFlights.current_month[0].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.current_month[0].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.current_month[0].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.current_month[0].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.current_month[1].MinPrice}</td>
												<td>{this.props.allFlights.current_month[1].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.current_month[1].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.current_month[1].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.current_month[1].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.current_month[2].MinPrice}</td>
												<td>{this.props.allFlights.current_month[2].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.current_month[2].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.current_month[2].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.current_month[2].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.current_month[3].MinPrice}</td>
												<td>{this.props.allFlights.current_month[3].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.current_month[3].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.current_month[3].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.current_month[3].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.current_month[4].MinPrice}</td>
												<td>{this.props.allFlights.current_month[4].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.current_month[4].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.current_month[4].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.current_month[4].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
										</tbody>
									</Table>
								</Tab>
								<Tab eventKey={3} title="Anytime in the future">
									<Table responsive>
										<thead>
											<tr>
											<th>Price (USD)</th>
												<th>Airline #</th>
								
												<th>Airline</th>
												<th>Direct</th>
												<th>Departure Date (YYYY/MM/DD)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>${this.props.allFlights.anytime[0].MinPrice}</td>
												<td>{this.props.allFlights.anytime[0].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.anytime[0].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.anytime[0].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.anytime[0].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.anytime[1].MinPrice}</td>
												<td>{this.props.allFlights.anytime[1].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.anytime[1].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.anytime[1].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.anytime[1].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.anytime[2].MinPrice}</td>
												<td>{this.props.allFlights.anytime[2].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.anytime[2].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.anytime[2].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.anytime[2].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.anytime[3].MinPrice}</td>
												<td>{this.props.allFlights.anytime[3].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.anytime[3].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.anytime[3].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.anytime[3].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
											<tr>
												<td>${this.props.allFlights.anytime[4].MinPrice}</td>
												<td>{this.props.allFlights.anytime[4].OutboundLeg.CarrierIds.int}</td>
												<td>{this.props.allFlights.carriers.find(carrier => carrier.CarrierId === this.props.allFlights.anytime[4].OutboundLeg.CarrierIds.int).Name}</td>
												<td>{this.props.allFlights.anytime[4].Direct === "true" ? "Yes" : "No"}</td>
												<td>{this.props.allFlights.anytime[4].OutboundLeg.DepartureDate.split('T')[0]}</td>
												
											</tr>
										</tbody>
									</Table>
								</Tab>
							</Tabs>
						)}
					</form>
				</div>
			</div>
		);
	}
}
