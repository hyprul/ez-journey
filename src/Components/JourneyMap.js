import React, { Component } from "react";
import Iframe from "react-iframe";

export default class JourneyMap extends Component {
	render() {
		return (
			<div>
				<h1 className="header center blue-text text-darken-4">Sky Journey</h1>
				<hr />
				<div align="center">
					<Iframe
						width="100%"
						height="100vh"
						frameborder="0"
						style="border:0"
						url="https://www.google.com/maps/embed/v1/place?key=
    &q=Goldman+Sachs,NYC+NY"
						allowfullscreen
					/>
				</div>
			</div>
		);
	}
}
