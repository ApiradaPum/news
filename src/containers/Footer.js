import React, {Component} from 'react';
import MenuList  from '../components/MenuList.js';
import '../style/footer.scss';

class Footer extends Component {

	  render() {
		  return (
				<div className="footer">
					<MenuList />
					<div className="copyright">
						Copy right <i className="fa fa-copyright" /> AMPOS
					</div>
				</div>
			  )
		  }
	  }
  
  
  export default Footer