import React, { Component } from "react";

import Background from "../backgroundImages/beach.jpg";

import LocationSearchInput from "./LocationSearchInput";

import {
	Jumbotron,
	Media,
	Button,
	FormGroup,
	FormControl,
	Carousel
} from "react-bootstrap";

var backgroundStyle = {
	width: "100%",
	height: "100vh",
	backgroundSize: "cover",

	backgroundImage: `url(${Background})`
};

export default class Quiz extends Component {
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
				<div id="bootstrap-overrides" className="centerquiz">
					<h1>Your Current Location:</h1>
					<h1>Houston, TX, USA</h1>
				</div>
				{/*<div>
				<Carousel>
					<Carousel.Item>
						<img
							width={'100%'}
							height={'100%'}
							alt="900x1000"
							src={require("../suggestions/paris.jpg")}
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis
								interdum.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width={'100%'}
							height={'100%'}
							alt="900x500"
							src={require("../suggestions/singapore.jpg")}
						/>
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width={'100%'}
							height={'100%'}
							alt="900x500"
							src={require("../suggestions/amsterdam.jpg")}
						/>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				</div>*/}
			</div>
		);
	}
}
