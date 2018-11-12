import React, { Component } from 'react';
import './../../App.css';
import Clock from './../header/Clock';
import NewsView from './../news/NewsView';
import Weather from './../header/CurrentWeather';
import TodoView from './../todo-list/TodoList';
import WeatherView from './../forecast/WeatherView';
import EventsView from './../calendar/EventsView';
import RefreshIcon from './../../img/refresh-button.png';

export default class Dashboard extends Component {

    constructor(props){
        super(props);

        // Create references for our objects
        this.todoViewRef = React.createRef();
        this.newsRef = React.createRef();
        this.techNewsRef = React.createRef();
        this.weatherView = React.createRef();
        this.eventsViewRef = React.createRef();

        this.updateViews = this.updateViews.bind(this);

        // Set the initila state
        this.state = {
            refreshing:false
        }
    }

    updateViews(){

        // Update all of our views
        this.todoViewRef.current.updateList();
        this.newsRef.current.updateNews();
        this.techNewsRef.current.updateNews();
        this.weatherView.current.updateWeather();
        this.eventsViewRef.current.updateEvents();
    
        // Set our state as refreshing
        this.setState((prevState, props) => ({
            refreshing:true
        }));

        // Get a reference to our object
        var object = this;

        // Refresh data every 2 second
        setTimeout(function(){
            object.setState((prevState, props) => ({
                refreshing:false
            }));
        }, 2000)
    }

  render() {
    return (
        <div className="dashboard">
            <div className={"dashboard-overlay " + (this.state.refreshing ? "refreshing" : '')}><span></span></div>
                <div className="header">
                    <Clock />
                    <Weather />
                    <img src={RefreshIcon} onClick={this.updateViews} className={"refresh " + (this.state.refreshing ? "refreshing" : '')} alt="Refresh Icon"/>
                </div>
                
                <div className="view-wrapper">
                    <TodoView ref={this.todoViewRef}/>
                    <EventsView ref={this.eventsViewRef}/>
                    <NewsView ref={this.newsRef} title="News" />
                    <NewsView ref={this.techNewsRef} title="Tech News" newsCategory="technology"/>

                    <WeatherView ref={this.weatherView} title="Tech News"/>
                </div>
        </div>
    );
  }
}


