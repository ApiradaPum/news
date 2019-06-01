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
            <div className="col-12 col-sm-4">
                <div className="blog-news">
                    <h3 className="d-none d-sm-block">Title</h3>
                    <img className="img-responsive" src={this.state.data.img} />
                    <h4 className="d-block d-sm-none">Title</h4>
                    <p>{this.state.data.content}</p>
                    <span className="update-date">Updated: {this.state.data.updated_at}</span>
                </div>
            </div>   
        )
    }
}
  
  
export default News