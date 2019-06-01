import React, {Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: this.props.data
        };
    }

	render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.state.data.url}>{this.state.data.title}</a>
            </li>
        )
    }
}
  
  
export default Menu