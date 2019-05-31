import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import news from '../json/news.json';
import _ from 'lodash';

class News extends Component {
	constructor() {
		super()
		this.state = {
			newsArr: this.getNews().data
		}
	}

	getNews(){
		return news;
	}

	handleLoadmore() {
		this.setState({newsArr: _.concat(this.state.newsArr, this.getNews().data)});
	}
	

	renderContent = () => {
		return this.state.newsArr.map((item, key) =>
			<Col sm={4} xs={12}>
				<div className="blog-news">
					<h3>Title</h3>
					<img className="img-responsive" src={item.img} />
					<p>{item.content}</p>
					<span className="update-date">Updated: {item.updated_at}</span>
				</div>
			</Col>
		);
	}
	
  
	render() {
		return (
			<div>
				<Container>
					<Row>
						{this.renderContent()}
						<button className="btn-loadmore" onClick={this.handleLoadmore.bind(this)} > Loadmore </button>
					</Row>
				</Container>
			</div>
				
			)
		}
	}
  
  
  export default News