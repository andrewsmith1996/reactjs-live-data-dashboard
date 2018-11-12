import React, { Component } from 'react';
import './../../App.css';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

	constructor(props){
		super(props);

        this.state = {tasks:''};
	}	

	componentDidMount(){
		this.updateList();
	}

	updateList(){
        const url = 'https://a.wunderlist.com/api/v1/tasks?list_id=<listIdHere?';

        const auth_headers = new Headers({
            'X-Access-Token':'api key here',
            'X-Client-ID':'api key here'}
        );

        const headers = {
            method: 'GET',
            headers: auth_headers,
            mode: 'cors',
            cache: 'default' 
        };

		// Create our request
        var myRequest = new Request(url, headers);

		// Get oru data and set the state
		fetch(myRequest)
		.then(response => response.json())
		.then(data => {
			this.setState((prevState, props) => ({
			tasks: data.map((todo) => <TodoItem toDo={todo} key={todo.id}/>)}));
		}).catch(error => console.log(error));
	}

	render() {
		return (
			<div className="view todo-view">
				<h3 className="title">Tasks</h3>
				<div className="cards">
					<ul>{this.state.tasks}</ul>
				</div>
			</div>
		);
	}
}




