import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import News from '../components/News.js';
import '../style/news.scss';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions';


class NewsSection extends Component {
	componentDidMount() {
		this.props.fetchNews();
	}

	renderNews() {
		return _.map(this.props.news, (item, key) => {
		  return (
			<News data={item} key={key} />
		  );
		});
	}
	
  
	render() {
		let showLoad = 'btn-loadmore';
		if(this.props.news.length >= this.props.allNews.length){
			showLoad = 'btn-loadmore hidden';
		}
		return (
			<div className="container">
				<div className="row">
					{this.renderNews()}
					<button className={showLoad} 
					onClick={() => this.props.fetchNews()} > 
						Load More 
					</button>
				</div>
			</div>       
		)
	}
}

function mapStateToProps(state){
	return {
		news: state.news.display_news,
		allNews: state.news.all_news
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchNews }, dispatch);
}
  

  
export default connect(mapStateToProps, mapDispatchToProps)(NewsSection);