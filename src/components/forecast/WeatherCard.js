import React, { Component } from 'react';
import './../../App.css';

export default class WeatherCard extends Component {

	constructor(props){
		super(props);
	}	

	render() {
        let time;
       
        // Get our date
        var date = new Date(this.props.weatherItem.dt*1000);
        
        // Hours part from the timestamp
        var hours = date.getHours();
        
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        // Finally make our data
        time = hours + ':' + minutes.substr(-2);

        // Construct our image URL path
        const src = "https://openweathermap.org/img/w/" + this.props.weatherItem.weather[0].icon + ".png";

		return (
			<li>
                <h3>{time}</h3>
                <img src={src} />
            </li>
		);
	}
}


