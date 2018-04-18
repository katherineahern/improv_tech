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
      emotion: "happy",
      key: Math.random()
    };
    this.playSong = this.playSong.bind(this);
  }

  componentDidMount() {
    Socket = new WebSocket('ws://ec2-52-206-113-82.compute-1.amazonaws.com:2222/' );
    Socket.onmessage = function(e) {
      var getMessage = JSON.parse(e.data);
      this.setState({
        palette: getMessage.palette,
        emotion: getMessage.emotion
      });
      console.log(getMessage.emotion);
      this.playSong();
    }.bind(this); // you need to bind here
  }

  playSong() {
    this.setState({ key: Math.random() });
    var audio = this.refs['audio'];
    audio.load();
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    
    return (
      <div>
        Emotion: <strong>{this.state.emotion}</strong><br/>
        Palette: <strong>{this.state.palette}</strong>
          
        <div className="col" >
          <img src={ require('./images/' + this.state.emotion.toLowerCase() + '.svg') } onClick={this.playSong}/><br/>
          <audio controls ref='audio' key={ this.state.emotion + this.props.palette } > //key to rerender audio
            <Song key={this.state.key} emotion={this.state.emotion.toLowerCase()} palette={ this.state.palette } />
          </audio>
        </div>  
      </div>

    );
  }
}

export default AdminMusic;