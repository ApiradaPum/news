import React, {Component} from 'react';
import {data} from '../json/menu.json';
import Menu from './Menu.js';

class MenuList extends Component {
	constructor(props) {
		super(props)
			this.state = {
            menu: data
			}
		}
		
    
	renderMenu = () =>{
		return this.state.menu.map((item, key) => (
			<Menu data={item} key={key}/>
		));
	}
    
	render() {
		return (
				<div >
					<ul className="navbar-nav mr-auto">
							{this.renderMenu()}
					</ul>
				</div>
				
			)
		}
	}
  
  
  export default MenuList