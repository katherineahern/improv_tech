import React, { Component } from 'react';
import axios from 'axios';
import '../css/linehat.css';
import * as Constants from '../Constants';


class GetLine extends Component {

	constructor(props) {
    	super(props);

	    this.state = {
	    	currentLine: 0,
	      	lines: [{ line: "initial line" }]
	    };

	    this.handleSubmit = event => {
		    event.preventDefault();

		    const line = {
		      line: this.state.line
		    };

		    axios.get('http://' + Constants.URL + ':8080/api/currentLine', {
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		      })
		      .then(res => {
		      	console.log("did something");
		      	console.log(res);
		      	var currentLine = res.data.currentLine;
		        this.setState({ currentLine: currentLine });
		      });
	  	}
	  	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	componentDidMount() {

  		
	    axios.get('http://' + Constants.URL +  ':8080/api/lines', {
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	      })
	      .then(res => {
	      	console.log(res);
	        const lines = res.data;
	        this.setState({ lines });
	      });

     	

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



  render() {
    return (
		<div class="getline">
		<div className="header-spacer"></div>
		  <header className="hat-header">
			  <h1 className="App-title" id="hat">Lines from a Hat! (Actor)</h1>
		  </header>

    
    	{this.state.lines[this.state.currentLine] ? (
          <h1 id="line4actor">{this.state.lines[this.state.currentLine].line}</h1>
        ) : (
          <h3>No more lines</h3>
        )}

        <form onSubmit={this.handleSubmit}>
	        <input type="submit" value="NEXT LINE"></input>
	    </form>
      </div>
    );
  }
}

export default GetLine;
