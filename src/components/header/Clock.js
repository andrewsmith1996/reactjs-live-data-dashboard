import React, { Component } from 'react';
import './../../App.css';

export default class Clock extends Component {

    constructor(props){
        super(props);

        // Set out initial state
        this.state = {
            date: '',
            time:''
        };
    }

    componentDidMount(){
        // Start off our clock!
        this.clock = setInterval(() => this.updateClock(), 1000);
    }

    componentWillUnmount(){
        // Clear our clock interval
        clearInterval(this.clock);
    }

    updateClock(){

        // Get the current date
        let current = new Date();
        
        // Make our date pretty
        let displayDate = current.getDate().toString() + '/' + current.getMonth().toString() + '/' + current.getFullYear().toString();
        let displayTime = current.getHours().toString() + ':' + (current.getMinutes() < 10 ? ('0' + current.getMinutes()) : (current.getMinutes().toString())) + ':' + (current.getSeconds() < 10 ? ('0' + current.getSeconds()) : (current.getSeconds().toString()));
        
        // Set our new state
        this.setState((prevState, props) => ({
            date:displayDate,
            time:displayTime
        }));
    }

  render() {
    return (
        <div className="clock-view">
            <h1>{this.state.time}</h1>
            <p>{this.state.date}</p>
        </div>
    );
  }
}


