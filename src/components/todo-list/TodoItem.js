import React, { Component } from 'react';
import './../../App.css';

export default class TodoItem extends Component {

	constructor(props){
		super(props);
	}	

	render() {
		let due_date;
		
		// Do we have a due date?
        if(this.props.toDo.due_date){
            due_date = "Due " + this.props.toDo.due_date;
        }
		return (
			<li>
                <p><strong>{this.props.toDo.title}</strong></p>
                <p>{due_date}</p>
            </li>
		);
	}
}


