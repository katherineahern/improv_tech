import React, { Component } from 'react';
import * as Constants from './Constants';
import axios from 'axios';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
	    	heartbeat: false
	    };

	    axios.get('http://' + Constants.URL +  ':8080/api/heartbeat', {
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	      })
	      .then(res => {
	      	console.log(res);
	        const heartbeat = res.data;
	        this.setState({ heartbeat });
	      });

		this.renderBanner = this.renderBanner.bind(this);
	}
	renderBanner() {
		const red = "red";
		if(!this.state.heartbeat) {
			return (
				<div style={{background: red}}>
		       		<br/>
		            This will only function during next show<br/>
		            <a href="https://www.eventbrite.com/o/improvisational-technology-17153874424">Get tickets!</a>
	          	</div>
			);
		} else {
			return null;
		}
	}
	render() {
		
		
		

		return (
			<div>
				<header className={this.props.propsClass}>
		          	<a class="applogo" href="App">⬅️</a>
		           	<h1 className="App-title" id={this.props.headerId}>{this.props.title}</h1>
		        </header>
		        {this.renderBanner()}
		       	
	        </div>
	    );
    }
}

export default Header;