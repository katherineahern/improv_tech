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
		/*axios.get('http://' + Constants.URL + ':8080/api/lines', {
		        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		      })
		      .then(res => {
		        const lines = res.data;
		        this.setState({ lines });
		      });*/

		    	axios.get('http://' + Constants.URL + ':8080/api/showLine', {
						    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				      })
				       .then(res => {
					     console.log(res);
					     const currentLineReply = res.data;
					     this.setState({ currentLine : currentLineReply.currentLine });
				     });
	}

	render() {
    	return (
        <div>
        	<h1>Lines</h1>
         <p>{this.state.currentLine}</p>

		    <div>
	          {this.state.lines.map(line =>
	          	<div>
	            	<a id={line.timestamp} key={line.timestamp} >
		            	<b>{line.line}</b><br/>
		            </a>
	            </div>
	          )}
		   	</div>

        </div>
    	);
  	}
}

export default ShowAllLines;
