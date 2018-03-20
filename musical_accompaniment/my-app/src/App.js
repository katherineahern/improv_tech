import React, { Component } from 'react';
import './App.css';
import Song from './Song';

class App extends Component {
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
    return (
      <div className={ this.state.palette } >
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
            <Emotion emotionName="Happy" palette={ this.state.palette } />
            <Emotion emotionName="Sad" palette={ this.state.palette } />
          </div>
          <div className="row">
            <Emotion emotionName="Angry" palette={ this.state.palette } />
            <Emotion emotionName="Fearful" palette={ this.state.palette } />
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
    console.log(this.refs);
    var audio = this.refs['audio'];
    audio.play();
  }
  render() {
    return ( 
      <div className="col" >      
          <img src={ require('./images/' + this.props.emotionName.toLowerCase() + '.svg') } onClick={this.playSong}/><br/>
          <audio controls ref='audio'  >
            <Song emotion={this.props.emotionName.toLowerCase()} />
          </audio>    
      </div>
    );
  }
}

export default App;
