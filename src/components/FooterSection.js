import React, {Component} from 'react';
import MenuList  from './MenuList.js';
import '../style/footer.scss';

class FooterSection extends Component {
	render() {
		return (
			<div className="footerSection footer">
				<MenuList />
				<div className="copyright">
					Copy right <i className="fa fa-copyright" /> AMPOS
				</div>
			</div>
		)
	}
}
  
  
export default FooterSection