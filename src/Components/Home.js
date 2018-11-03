import React from "react";
import { Button, Parallax } from "react-materialize";
import { NavLink } from "react-router-dom";

export default () => {
	return (
		<div>
			<div>
				<Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
				<div className="section white">
					<div className="row container">
						<h2 className="header">Easy Journey</h2>
						<p className="grey-text text-darken-3 lighten-3">
							Let us go on a journey.
						</p>
					</div>
				</div>
				<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
			</div>
		</div>
	);
};
