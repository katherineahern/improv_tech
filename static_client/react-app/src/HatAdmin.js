import React, { Component } from 'react';
import axios from 'axios';

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
		axios.get('http://ec2-52-206-113-82.compute-1.amazonaws.com:8080/api/lines', {
		        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		      })
		      .then(res => {
		      	console.log(res);
		        const lines = res.data;
		        this.setState({ lines });
		      });
	}

	resetCurrentLine() {
		axios.post('http://ec2-52-206-113-82.compute-1.amazonaws.com:8080/api/resetCurrentLine', {}, {
		        'Content-Type': 'application/x-www-form-urlencoded'
		      }).then(res => {
      			console.log(res);
		      	console.log("reset current line");
		        
		      });
	}

	deleteLine(event) {
		const {id} = event.target;
    	console.log({'timestamp': id });

		axios.post('http://ec2-52-206-113-82.compute-1.amazonaws.com:8080/api/deleteLine', {'timestamp': id }, {
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
	            	<a id={line.timestamp} key={line.timestamp} onClick={this.deleteLine} >
		            	{line.timestamp}<br/>
		            	{line.line}
		            </a>
	            </div>
	          )}
		   	</div>     
		       
        </div>
    	);
  	}
}

export default HatAdmin;