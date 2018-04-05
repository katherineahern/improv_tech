import React, { Component } from 'react';
import axios from 'axios';

class GetLine extends Component {

	constructor(props) {
    	super(props);

	    this.state = {
	      lines: []
	    };
  	}

  componentDidMount() {
    axios.get('http://ec2-18-232-81-165.compute-1.amazonaws.com:8080/api/lines', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
			<div class ="header">
			  <h1>Actor</h1>
			</div>
      <div>
        <h2>All lines</h2>
        <ul>
          {this.state.lines.map(line =>
            <li key={line.id}>{line.line}</li>
          )}
        </ul>
      </div>
			</div>
    );
  }
}

export default GetLine;
