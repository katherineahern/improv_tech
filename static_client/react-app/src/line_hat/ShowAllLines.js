import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../Constants';

class ShowAllLines extends Component {

	constructor(props) {
    	super(props);

	    this.state = {
	    	currentLine: 0,
	      	lines: [{ line: "initial line" }]
	    };
	    
	}

	componentDidMount() {
		
		var self = this;
		(function pollServerForNewLine() {
			
		  	axios.get('http://' + Constants.URL +  ':8080/api/lines', {
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	      	})
	      	.then(res => {
		    
				const lines = res.data;
		    	self.setState({ lines });
		    	setTimeout(pollServerForNewLine, 1000);
		  	});
		}());

		(function pollServerForCurrentLine() {
    		axios.get('http://' + Constants.URL + ':8080/api/showLine', {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		    })
		    .then(res => {
			    console.log(res);
			    const currentLineReply = res.data;
			    self.setState({ currentLine : currentLineReply.currentLine });
			    setTimeout(pollServerForCurrentLine, 1000);
		     });
		}());
	}

	render() {
    	return (
        <div>
        	<h1>Lines</h1>
		    <div>
	          	{this.state.lines.map(line =>	          	
		          	<div id="showCurrentLine" className={line === this.state.lines[this.state.currentLine] ? 'showCurrentLine':'showLine' }>	            	
			            {line.line}
		            </div>    
		        )}
		   	</div>

        </div>
    	);
  	}
}

export default ShowAllLines;
