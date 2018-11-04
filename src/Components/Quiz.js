import React, { Component } from "react";

import Background from "../backgroundImages/beach.jpg";

import LocationSearchInput from "./LocationSearchInput";

import "../Quiz.css";

import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Table, Image, FormGroup, ControlLabel, FormControl, InputGroup, Radio, Alert } from 'react-bootstrap';



var backgroundStyle = {
	width: "100%",
	height: "100vh",
	backgroundSize: "cover",

	backgroundImage: `url(${Background})`
};

export default class Quiz extends Component {
	constructor(props) {
    super(props);
    this.state = {
			suggestions:null
    };
  }

	handleChanges = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	handleSubmit = (e) =>{
		e.preventDefault();
		const suggestions = this.suggestPlaces(this.state.climate, this.state.environment, this.state.pace)
		this.setState({suggestions:suggestions})
	}

	mapSuggestions =() =>{
		return(
			this.state.suggestions.map( suggest => <Col md={8} xs={10} mdOffset={2}  xsOffset={1} className="user-info "><div className="col-md-12 margin-bottom"><h3>{suggest}</h3></div></Col>)
		)
	}

	suggestPlaces= (climate, environment, pace) => {
	    if(climate === "heat" && environment ==="city" && pace ==="relaxing"){
	    	return ["Austin, Texas","San Diego, California","New Orleans, Louisiana"]
	    }
	    if(climate === "heat" && environment ==="nature" && pace ==="relaxing"){
	    	return ["Carmel-by-the-Sea, California","Honolulu, Hawaii","Savannah, Georgia"]
	    }
	        if(climate === "heat" && environment ==="city" && pace ==="on the go"){
	    	return ["Las Vegas, Nevada","Los Angeles, California","Miami"]
	    }
	        if(climate === "heat" && environment ==="nature" && pace ==="on the go"){
	    	return ["Austin, Texas","Portland, Oregon ","Key West, Florida"]
	    }
	        if(climate === "cold" && environment ==="city" && pace ==="relaxing"){
	    	return ["Juneau, Alaska", "Denver, Colorado", "Boston, Massachusetts"]
	    }
	        if(climate === "cold" && environment ==="nature" && pace ==="relaxing"){
	    	return ["Juneau", "Denver", "Portland"]
	    }
	        if(climate === "cold" && environment ==="nature" && pace ==="on the go"){
	    	return ["Seattle, Washington", "Portland, Maine", "Boston, Massachusetts"]
	    }
	        if(climate === "cold" && environment ==="city" && pace ==="on the go"){
	    	return ["New York City, New York","Chicago, Illinois","Washington, DC"]
	    }

	    return ["New York City, New York","Los Angeles, California", "Tokyo, Japan"]

	}

	render() {
		console.log(this.state)
		return (
			<Grid style={backgroundStyle}>
			            <Row className="show-grid center">
			              {!this.state.suggestions?<Col md={8} xs={10} mdOffset={2}  xsOffset={1} className="user-info ">
			                <div className="col-md-12 margin-bottom"><h3>Journey Matcher</h3></div>
			                <form onSubmit={e=>this.handleSubmit(e)}>
			                  <FormGroup className="col-md-12">
			                    <ControlLabel className="push-right">Which climate do you prefer?</ControlLabel>
			                    <Radio inline name="climate" value="heat" required onChange={e=>this.handleChanges(e)}>Hot</Radio>
			                    <Radio inline name="climate" value="cold" onChange={e=>this.handleChanges(e)}>Cold</Radio>
			                  </FormGroup>
			                  <FormGroup className="col-md-12">
			                    <ControlLabel className="push-right">Are you a city person or do you enjoy being out in nature? </ControlLabel>
			                    <Radio inline name="environment" value="city" required onChange={e=>this.handleChanges(e)}>City dweller</Radio>
			                    <Radio inline name="environment" value="nature" onChange={e=>this.handleChanges(e)}>Nature explorer</Radio>
			                  </FormGroup>
			                  <FormGroup className="col-md-12">
			                    <ControlLabel className="push-right">What is your ideal vacation scenario? </ControlLabel>
			                    <Radio inline name="pace" value="on the go" required onChange={e=>this.handleChanges(e)}>Sightseeing</Radio>
			                    <Radio inline name="pace" value="relaxing" onChange={e=>this.handleChanges(e)}>Relazing</Radio>
			                  </FormGroup>
			                  <FormGroup className="col-md-6">
			                    <Button bsStyle="primary" bsSize="large" type="submit">Submit</Button>
			                  </FormGroup>
			                </form>
			              </Col>: this.mapSuggestions()}
			            </Row>
			          </Grid>
		);
	}
}
