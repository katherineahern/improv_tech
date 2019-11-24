import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import Song from './Song';
import * as Constants from '../Constants';
import Header from '../Header';

var Socket;
class AudiencePlaySong extends Component {
  constructor(props) {

    super(props);
    this.state = { palette: 'none', emotion: 'happy' };
    // TODO: refactor so this isn't necessary
    this.handlePaletteChange = this.handlePaletteChange.bind(this);
    this.sendPaletteAndEmotion = this.sendPaletteAndEmotion.bind(this);


  }
  componentDidMount() {
      Socket = new WebSocket('ws://' + Constants.URL + ':2222/' );
  }

  sendPaletteAndEmotion(emotion) {
    this.state.emotion = emotion;
    let stateString = JSON.stringify(this.state);
    Socket.send(stateString);
  }

  handlePaletteChange(changeEvent) {
    this.setState({
      palette: changeEvent.target.value
    });
  }
  //TODO: rewrite to send command over websockets
  render() {
    return (
      <div className={ this.state.palette } >
       <div className="header-spacer"></div>
        <Header propsClass={'music-header audience'} title={'♫ Improvised Musical! ♫'} />
        <div class="pad15">
          <p>Choose a genre and tap an emotion that seems right for the moment...& make the actors sing!
          </p>
          <tip class="light">Once the music starts, avoid buttons onscreen. Most will interrupt the music!
          </tip>
        </div>
        <div className="table">
          <div className="row">

              <form action="">
                <input type="radio" value='none' checked={ this.state.palette === 'none' } onChange={this.handlePaletteChange}/> Rock
                <input type="radio" value='jazz' checked={ this.state.palette === 'jazz' } onChange={this.handlePaletteChange}/> Lounge
                <input type="radio" value='funk' checked={ this.state.palette === 'funk' } onChange={this.handlePaletteChange}/> Funk
                <input type="radio" value='latin' checked={ this.state.palette === 'latin' } onChange={this.handlePaletteChange}/> Latin
              </form>
          </div>

            <div className="row">
                <img src={ require('../images/happy.svg') } onClick={() => this.sendPaletteAndEmotion('happy')}/>
                <img src={ require('../images/sad.svg') } onClick={() => this.sendPaletteAndEmotion('sad')}/>
            </div>
            <div className="row">
                <img src={ require('../images/angry.svg') } onClick={() => this.sendPaletteAndEmotion('angry')}/>
                <img src={ require('../images/fearful.svg') } onClick={() => this.sendPaletteAndEmotion('fearful')}/>
            </div>
        </div>
      </div>
    );
  }

}



export default AudiencePlaySong;