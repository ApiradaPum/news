import React, {Component} from 'react';
import Menu from './Menu.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMenu } from '../actions';

class MenuList extends Component {
	componentDidMount() {
		this.props.fetchMenu();
	}
	
	renderMenu = () =>{
		return _.map(this.props.menu, (item, key) => {
		  return (
				<Menu data={item} key={key}/>
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