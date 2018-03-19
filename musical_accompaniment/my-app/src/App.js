import React, { Component } from 'react';
import './App.css';
import Song from './Song';

class App extends Component {
  render() {
    return (
      <div className="table">
        <div className="row">
          <Emotion emotionName="Happy" />
          <Emotion emotionName="Sad" />
        </div>
        <div className="row">
          <Emotion emotionName="Angry" />
          <Emotion emotionName="Fearful" />
        </div>
      </div>
    );
  }
}

function Emotion(props) {
  
  return (
    <div className="col">
      {props.emotionName}<br/>
      <audio controls>
        <Song emotion={props.emotionName.toLowerCase()} />
      </audio>
    </div>
  );
}



export default App;
