import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import MenuList  from '../components/MenuList.js';
import { searchNews } from '../actions';
import { connect } from "react-redux";
import '../style/nav.scss';

class Header extends Component {
	onSubmit(values){
		this.props.searchNews(values);
	}

	renderField(field){
		return (
			<input
				className="search-bar"
				type="text"
				placeholder="search"
				{...field.input} 
			/>
	    );
	}

	render() {
		return (
			<div className="container">
				<div className="nav-bar">
					<img className="logo" src="/img/empty.png" />
					<div className="menuList">
						<MenuList />
						<form onSubmit={()=>(this.onSubmit.bind(this))}>
							<i className="fa fa-search" />
							<Field
							name="searchNews" 
							component={this.renderField}
							/>
							{/* <i className="fa fa-search" />
							<input className="search-bar" placeholder="search" /> */}
							
						</form>
					</div>
				</div>
			</div>
			)
		}
	}
  
  
export default reduxForm({
	form: 'SearchNews'
})(
connect (null, {searchNews})(Header)
);