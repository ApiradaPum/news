import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Chat extends Component {
	constructor() {
	  super()
  
	  	this.state = {
			colors: ['darksalmon', 'deepskyblue', 'darkgreen', 'cornflowerblue', 'brown', 'coral', 'blueviolet','red', 'blue'],
			input: '',
			username: '',
	  	}
	}
	
  
	render() {
		return (
			<div>
				
				<Container>
					<Row>
						<Col sm={4} xs={12}>
							<div className="blog-news">
								<h2>Title</h2>
								<img className="img-responsive" src={'/img/empty.png'} />
								<p>Lorem Ipsum is simply dummy text of the printing and
								 typesetting industry. Lorem Ipsum has been the industry's standard 
								 dummy text ever since the 1500s, when an unknown printer took a 
								 galley of type and scrambled it to make a type specimen book. 
								 It has survived not only five centuries, but also the leap into 
								 electronic typesetting, remaining essentially unchanged. It was 
								 popularised in the 1960s with the release of Letraset sheets 
								 containing Lorem Ipsum passages, and more recently with desktop 
								 publishing software like Aldus PageMaker including versions of 
								 Lorem Ipsum. </p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
				
			)
		}
	}
  
  
  export default Chat