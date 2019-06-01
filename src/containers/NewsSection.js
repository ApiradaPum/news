import React, {Component} from 'react';
import news from '../json/news.json';
import _ from 'lodash';
import News from '../components/News.js';
import '../style/news.scss';

class NewsSection extends Component {
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
	

	renderNews = () => {
		return this.state.newsArr.map((item, key) =>
				<News data={item} key={key} />
		);
	}
	
  
	render() {
			return (
					<div className="container">
						<div className="row">
							{this.renderNews()}
							<button className="btn-loadmore" onClick={this.handleLoadmore.bind(this)} > Load More </button>
						</div>
					</div>       
			)
		}
	}
  
  
  export default NewsSection