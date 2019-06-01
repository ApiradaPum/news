import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import News from '../components/News.js';
import '../style/news.scss';
import { bindActionCreators } from 'redux';
import { getNews, fetchNews } from '../actions';


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
		return (
			<div className="container">
				<div className="row">
					{this.renderNews()}
					<button className="btn-loadmore" 
					onClick={() => this.props.getNews(this.props.news)} > 
					Load More 
					</button>
				</div>
			</div>       
		)
	}
}

function mapStateToProps(state){
	return {
		news: state.news
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getNews: getNews, fetchNews }, dispatch);
}
  

  
export default connect(mapStateToProps, mapDispatchToProps)(NewsSection);