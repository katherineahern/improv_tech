//This file is deprecated. Do not update!
//(I accidentally worked on this and couldn't figure out what I was doing wrong!)

import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import Song from './Song';

class MusicalAccompaniment extends Component {
  constructor(props) {

    super(props);
    this.state = { palette: 'none' };
    // TODO: refactor so this isn't necessary
    this.handlePaletteChange = this.handlePaletteChange.bind(this);

  }

  handlePaletteChange(changeEvent) {
    this.setState({
      palette: changeEvent.target.value
    });
  }

  render() {
    const red = "red";
    return (
      <div className={ this.state.palette } >
        <div className="table">
          <div style={{background: red}}>
            This will be functional during next show, which is: <br/>
            eventbrite link
          </div>
          <div className="row">
              {this.state.palette.toUpperCase()}
              <form action="">
                <input type="radio" value='none' checked={ this.state.palette === 'none' } onChange={this.handlePaletteChange}/> None
                <input type="radio" value='jazz' checked={ this.state.palette === 'jazz' } onChange={this.handlePaletteChange}/> Lounge
                <input type="radio" value='funk' checked={ this.state.palette === 'funk' } onChange={this.handlePaletteChange}/> Funk
                <input type="radio" value='latin' checked={ this.state.palette === 'latin' } onChange={this.handlePaletteChange}/> Latin
              </form>
          </div>
          <div className="row">
             <div className="tile">
                  <Emotion emotionName="Happy" palette={ this.state.palette } />
             </div>
             <div className="tile">
                  <Emotion emotionName="Sad" palette={ this.state.palette } />
             </div>
          </div>
          <div className="row">
            <div className="tile">
              <Emotion emotionName="Angry" palette={ this.state.palette } />
            </div>
            <div className="tile">
              <Emotion emotionName="Fearful" palette={ this.state.palette } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Emotion extends Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
  }
  playSong(feeling) {
    var audio = this.refs['audio'];
    audio.load();
    audio.currentTime = 0;
    audio.play();
  }
  render() {
    return (
      <div className="col" >
          <img src={ require('../images/' + this.props.emotionName.toLowerCase() + '.svg') } onClick={this.playSong}/><br/>
          <audio controls ref='audio' key={ this.props.emotionName + this.props.palette } > //key to rerender audio
            <Song emotion={this.props.emotionName.toLowerCase()} palette={ this.props.palette } />
          </audio>
      </div>
    );
  }
}

export default MusicalAccompaniment;
