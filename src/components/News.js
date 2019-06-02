import React, {Component} from 'react';
import _ from 'lodash';

class News extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: this.props.data
        };
    }

    getMockImg(){
        return `${this.state.data.img}?random=${_.random(1,100)}`;
    }

	render() {
        return (
            <div className="col-12 col-md-4 col-news">
                <div className="blog-news">
                    <h3 className="d-none d-sm-block">{this.state.data.title}</h3>
                    <img className="img-responsive" src={this.getMockImg()} />
                    <div className="newsMobile">
                        <h5 className="d-block d-sm-none title">{this.state.data.title}</h5>
                        <p>{this.state.data.content}</p>
                        <span className="update-date">Updated: {this.state.data.updated_at}</span>
                    </div>                    
                </div>
            </div>   
        )
    }
}
  
  
export default News