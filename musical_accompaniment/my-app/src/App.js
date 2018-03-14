import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="col">{props.emotionName}</div>
  );
}

export default App;
