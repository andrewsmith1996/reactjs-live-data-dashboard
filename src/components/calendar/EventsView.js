import React, { Component } from 'react';
import './../../App.css';
import Event from './EventsCard';

export default class EventsView extends Component {

	constructor(props){
		super(props);

		this.state = {events:''};
	}	

	componentDidMount(){
		this.updateEvents();
	}

	updateEvents(){
		var url = 'https://api.cronofy.com/v1/events?tzid=Etc/UTC&from=';
		
        const now = new Date();
        url += now.toJSON().toString();

		// Create our authorisation heads
        let auth_headers = new Headers({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data',
			'Authorization': "AUTHCODE",	
        });

		// Create our actual headers
        let headers = {
            method: 'GET',
            headers: auth_headers,
            mode: 'cors',
            cache: 'default' 
        };

		// Create our request
        var request = new Request(url, headers);

		// Call our calendar API and set the state
		fetch(request)
		.then(response => response.json())
		.then(data => {
			this.setState((prevState, props) => ({
			events: data.events.slice(0,5).map((eventItem) => <Event event={eventItem} key={ eventItem.event_uid } />)}));
		}).catch(error => console.log(error));
	}

	render() {
		return (
			<div className="view events-view">
				<h3 className="title">Events</h3>
				<div className="cards">
					<ul>{this.state.events}</ul>
				</div>
			</div>
		);
	}
}