import React, {Component} from 'react';
import MenuList  from './MenuList.js';
import { searchNews } from '../actions';
import { connect } from "react-redux";
import SearchBar from './SearchBar';
import { bindActionCreators } from 'redux';
import '../style/nav.scss';

export class HeaderSection extends Component {
	onSubmit(term){
		this.props.searchNews(term);
	}

	render() {
		return (
			<div className="headerSection">
				<div className="container nav-header">
					<div className="nav-bar">
						<div className="header-bar">
							<img className="logo" src="/img/empty.png" alt=""/>
							<h4 className="title-mobile">News</h4>
							<i className="fa fa-bars" />
						</div>
						<div className="menuList">
							<MenuList />
							<SearchBar onSubmit={this.onSubmit.bind(this)}/>
						</div>
					</div>
				</div>
			</div>
			
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ searchNews }, dispatch);
}
  
export default connect(null, mapDispatchToProps)(HeaderSection);