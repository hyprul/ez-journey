import React, { Component } from "react";
import Iframe from "react-iframe";
import MapElement from "./MapElement";

export default class JourneyMap extends Component {
	render() {
		return (
			<div>
				<h1 className="header center blue-text text-darken-4">
					Sky Journey
				</h1>
				<div align="center">
					<MapElement
						googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places`}
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={
							<div style={{ height: `100vh`, width: `100%` }} />
						}
						mapElement={<div style={{ height: `100%` }} />}
					/>
				</div>
			</div>
		);
	}
}
