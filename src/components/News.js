import React, {Component} from 'react';

class News extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: this.props.data
        };
    }

	render() {
        return (
            <div className="col-sm-4 col-xs-12">
                <div className="blog-news">
                    <h3>Title</h3>
                    <img className="img-responsive" src={this.state.data.img} />
                    <p>{this.state.data.content}</p>
                    <span className="update-date">Updated: {this.state.data.updated_at}</span>
                </div>
            </div>   
        )
    }
}
  
  
export default News