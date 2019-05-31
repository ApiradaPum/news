import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container, Image} from 'react-bootstrap';

class Header extends Component {
	constructor() {
	  super()
	  	this.state = {
			input: '',
			username: '',
	  	}
	}
	
  
	render() {
		return (
			<div>
				<Container className="nav-bar bg-dark-mint">
					<Image className="logo" src="/img/empty.png" roundedCircle />
					<Navbar bg="bg-dark-mint" variant="light">
						<Navbar.Brand href="#home">Navbar</Navbar.Brand>
						<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
						<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-primary">Search</Button>
						</Form>
					</Navbar>
				</Container>
			</div>
			)
		}
	}
  
  
  export default Header