import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../Constants';

class HatAdmin extends Component {

	constructor(props) {
    	super(props);

	    this.state = {
	    	currentLine: 0,
	      	lines: [{ line: "initial line" }]
	    };

	    this.deleteLine = this.deleteLine.bind(this);
	    this.resetCurrentLine = this.resetCurrentLine.bind(this);
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
	}

	resetCurrentLine() {
		axios.post('http://' + Constants.URL + ':8080/api/resetCurrentLine', {}, {
		        'Content-Type': 'application/x-www-form-urlencoded'
		      }).then(res => {
      			console.log(res);
		      	console.log("reset current line");
		        
		      });
	}

	deleteLine(event) {
		const {id} = event.target;
    	console.log({'timestamp': id });

		axios.post('http://' + Constants.URL + ':8080/api/deleteLine', {'timestamp': id }, {
		        'Content-Type': 'application/x-www-form-urlencoded'
		      })
		      .then(res => {
		      	console.log(res);
		        const lines = res.data;
		        this.setState({ lines });
		      });
	    

  	}

	render() {
    	return (
        <div>
        	<h1>Lines from a Hat Admin</h1>

        	<form onSubmit={this.resetCurrentLine}>
	         <input type="submit" value="Reset Counter"></input>
		    </form>	
		    <div>
	          {this.state.lines.map(line =>
	          	<div>
		          	<div className={'col6'}>	
			            {line.line}
			        </div>
			        <div className={'col6'}>   
			            <button id={line.timestamp} key={line.timestamp}  onClick={this.deleteLine}> Delete Line</button>
		            </div>
		        </div>
	          )}
		   	</div>     
		       
        </div>
    	);
  	}
}

export default HatAdmin;