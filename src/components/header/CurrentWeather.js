import React, { Component } from 'react';
import './../../App.css';

export default class Weather extends Component {

    constructor(props){
        super(props);
        this.state = {
            weather:'',
            iconUrl:''
        };
    }

    componentDidMount(){
        // Component has mounted, get our data
        this.getWeather();
    }

    getWeather(){

        // Get the weather forecast and set the state
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Nottingham,uk&appid=<APP ID HERE>')
        .then(response => response.json())
        .then(data => {
            this.setState((prevState, props) => ({
                weather:data.weather[0].description,
                iconUrl:"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            }));
            
        })
    }

    render() {
        return (
            <div className="weather-view"> 
                <h1>Nottingham, UK</h1>
                <img src={this.state.iconUrl} />
                <p>{this.state.weather}</p>
            </div>
        );
    }
}


