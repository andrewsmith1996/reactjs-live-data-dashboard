import React, { Component } from 'react';
import './../../App.css';

export default class NewsArticle extends Component {

	constructor(props){
		super(props);
	}	

	render() {
		// Get the date
		const date = new Date(this.props.newsArticle.publishedAt);
		const formattedDate = date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString();

		return (
            <li>
                <p>{this.props.newsArticle.title}</p>
                <img src={this.props.newsArticle.urlToImage} alt={this.props.newsArticle.title} />
                <p>{formattedDate}</p>
            </li>
		);
	}
}



