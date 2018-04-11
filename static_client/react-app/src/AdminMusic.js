import React, { Component } from 'react';
import axios from 'axios';
import ReactWebsocket from 'react-websocket';
import Song from './Song';
 

var Socket;
class AdminMusic extends Component {
  
  constructor(props) {
      super(props);  
      this.state = {
        palette: "none",
        emotion: "happy"
      };
    
  }

  componentDidMount() {
    Socket = new WebSocket('ws://localhost:2222/' );
    Socket.onmessage = function(e) {
      var getMessage = JSON.parse(e.data);
      this.setState({
        palette: getMessage.palette,
        emotion: getMessage.emotion
      });
      console.log(getMessage.emotion);
    }.bind(this); // you need to bind here
  }

  render() {
    
    return (
      <div>
        Emotion: <strong>{this.state.emotion}</strong><br/>
        Palette: <strong>{this.state.palette}</strong>

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