import React, { Component } from 'react';
import './App.css';
import Song from './Song';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = { palette: 'none' };
    // This binding is necessary to make `this` work in the callback
    this.handlePaletteChange = this.handlePaletteChange.bind(this);
  }

  setPalette(option) {
    this.setState({
      palette: option
    });
  }

  handlePaletteChange(changeEvent){
    this.setState({
      palette: changeEvent.target.value
    });
  }
 

  render() {
    return (
      <div className="table">
        <div className="row">
            {this.state.palette}
            <form action="">
              <input type="radio" value='none' checked={ this.state.palette === 'none' } onChange={this.handlePaletteChange}/> None
              <input type="radio" value='lounge' checked={ this.state.palette === 'lounge' } onChange={this.handlePaletteChange}/> Lounge
              <input type="radio" value='funk' checked={ this.state.palette === 'funk' } onChange={this.handlePaletteChange}/> Funk
              <input type="radio" value='latin' checked={ this.state.palette === 'latin' } onChange={this.handlePaletteChange}/> Latin
            </form>
        </div>
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



function getPalette(option) {
    console.log(this);
    return option;
  }


function changePalette(props) {
  console.log(this);
  //this.state.palette = 'funk';
}


export default App;
