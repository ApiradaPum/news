import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMenu } from '../actions';

export class MenuList extends Component {
	componentDidMount() {
		this.props.fetchMenu();
	}
	
	renderMenu = () =>{
		return _.map(this.props.menu, (item, key) => {
		  return (
				<li className="nav-item" key={key}>
					<a className="nav-link" href={item.url}>{item.title}</a>
				</li>
		  );
		});
	}
    
	render() {
		return (
				<div className="group-nav">
					<ul className="navbar-nav mr-auto">
						{this.renderMenu()}
					</ul>
				</div>
			)
		}
}

function mapStateToProps(state){
	return {
		menu: state.menu
	};
}
  
  
export default connect(mapStateToProps,{fetchMenu})(MenuList);