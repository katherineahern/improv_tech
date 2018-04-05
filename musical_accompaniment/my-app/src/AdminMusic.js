import React, { Component } from 'react';
import axios from 'axios';
import Websocket from 'react-websocket';
 


class AdminMusic extends Component {
	constructor(props) {
      super(props);
      this.state = {
        string: ""
      };
    }
 
    handleData(data) {
      let result = data;
      this.setState({string: result});
    }

    handleSubmit() {
    	Websocket.send("Here's some text that the server is urgently awaiting!");
    }
 
    render() {
      return (
        <div>
          String: <strong>{this.state.string}</strong>
 
          	<Websocket url='ws://localhost:2222/'
              onMessage={this.handleData.bind(this)}/>

          <form onSubmit={this.handleSubmit}>
             <input type="submit" value="Submit"></input>
           </form>   
        </div>


      );
    }
}

export default AdminMusic;