import React, { Component } from 'react';
import './../../App.css';
import NewsArticle from './NewsArticle';

export default class NewsView extends Component {

	constructor(props){
		super(props);

		this.state = {newsItems:''};
	}	

	componentDidMount(){
		this.updateNews();
	}

	updateNews(){

		// Call the API to get our news info
		var url = 'https://newsapi.org/v2/top-headlines';
		if(this.props.newsCategory === 'technology'){
			url += '?category=technology&country=gb';
		} else{
			url += '?country=gb'; 
		}

		url += '&apiKey=API KEY HERE';

		// Fetch our data and set the state
		fetch(url)
		.then(response => response.json())
		.then(data => {
			this.setState((prevState, props) => ({
			newsItems: data.articles.slice(0,5).map((article) => <NewsArticle newsArticle={article}  key={article.publishedAt}/>)}));
		}).catch(error => console.log(error));
	}

	render() {
		return (
			<div className="view news-view">
				<h3 className="title">{this.props.title}</h3>
				<div className="cards">
					<ul>{this.state.newsItems}</ul>
				</div>
			</div>
		);
	}
}


