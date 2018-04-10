import React, { Component } from 'react';
import axios from 'axios';
import ReactWebsocket from 'react-websocket';
 

var Socket;
class AdminMusic extends Component {
	constructor(props) {
      super(props);
      this.state = {
        string: ""
      };

      
  }
  componentDidMount() {
      Socket = new WebSocket('ws://localhost:2222/' );
      Socket.onmessage = function (evt) 
       { 
          var received_msg = JSON.stringify(evt.data);
          alert("Message is received..." + received_msg);
          //this.setState({ string: received_msg });
       };  
  }
 
  handleData(data) {
    let result = data;
    
    
  }

  handleSubmit() {
    Socket.send("Got it from Socket");
    Socket.onmessage = function (evt) 
     { 
        var received_msg = evt.data;
        alert("Message is received..." + evt.data);
     };
  }

  render() {
    
    return (
      <div>
        String: <strong>{this.state.string}</strong>

        	<ReactWebsocket url='ws://localhost:2222/'
            onMessage={this.handleData.bind(this)}/>

        <form onSubmit={this.handleSubmit}>
           <input type="submit" value="Submit"></input>
         </form>   
      </div>


    );
  }
}

export default AdminMusic;