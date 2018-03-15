import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
import happy from './songs/happy.mp3';
import sad from './songs/sad.mp3';
import angry from './songs/angry.mp3';
import fearful from './songs/fearful.mp3';

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

function Song(props) {
  
  switch(props.emotion) {
    case 'happy':
      return (
        <source src={happy} type="audio/mpeg" />
      );
      break;
    case 'sad':
      return (
        <source src={sad} type="audio/mpeg" />
      );
      break;
    case 'angry':
      return (
        <source src={angry} type="audio/mpeg" />
      );
      break;
    case 'fearful':
      return (
        <source src={fearful} type="audio/mpeg" />
      );
      break;
    default:
      return (
        <source src={happy} type="audio/mpeg" />
      );
  }
  
}

export default App;
