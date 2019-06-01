import React, {Component} from 'react';
import MenuList  from '../components/MenuList.js';
import '../style/nav.scss';

class Header extends Component {
	render() {
		return (
			<div className="container">
				<div className="nav-bar">
					<img className="logo" src="/img/empty.png" />
					<div className="menuList">
						<MenuList />
						<form >
							<i className="fa fa-search" />
							<input className="search-bar" placeholder="search" />
						</form>
					</div>
				</div>
			</div>
			)
		}
	}
  
  
  export default Header