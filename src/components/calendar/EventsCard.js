import React, { Component } from 'react';
import './../../App.css';

export default class Event extends Component {

	constructor(props){
		super(props);
	}	

	render() {
		
		// Format the data into something pretty!
		const date = new Date(this.props.event.start);
		let formattedDate = date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString();
		let formattedTime = date.getHours().toString() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : (date.getMinutes().toString()));

		return (
			<li>
                <h3>{this.props.event.summary}</h3>
                <p>{formattedDate}</p>
                <p>{formattedTime}</p>
            </li>
		);
	}
}


