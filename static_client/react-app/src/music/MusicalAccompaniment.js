import React, { Component } from 'react';
import '../css/App.css';
import '../css/index.css';
import Song from './Song';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Radio from 'material-ui/Radio';

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
    
    return (
      <div className={ this.state.palette } >
        <Grid>
          
          <Grid>
              
              <form action="">
                <Radio value='none' checked={ this.state.palette === 'none' } onChange={this.handlePaletteChange}/> Rock
                <Radio value='jazz' checked={ this.state.palette === 'jazz' } onChange={this.handlePaletteChange}/> Lounge
                <Radio value='funk' checked={ this.state.palette === 'funk' } onChange={this.handlePaletteChange}/> Funk
                <Radio value='latin' checked={ this.state.palette === 'latin' } onChange={this.handlePaletteChange}/> Latin
              </form>
          </Grid>
          <Grid>
             <Button>
                  <Emotion emotionName="Happy" palette={ this.state.palette } />
             </Button>
             <Button>
                  <Emotion emotionName="Sad" palette={ this.state.palette } />
             </Button>
          </Grid>
          <Grid>
            <Button>
              <Emotion emotionName="Angry" palette={ this.state.palette } />
            </Button>
            <Button>
              <Emotion emotionName="Fearful" palette={ this.state.palette } />
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

class Emotion extends Component {
  
  constructor(props) {
    super(props);
  }
  

  render() {
    let playSong = (feeling) => {
      var audio = this.refs['audio'];
      audio.load();
      audio.currentTime = 0;
      audio.play();
    }
    return (
      <div>
          <img src={ require('../images/' + this.props.emotionName.toLowerCase() + '.svg') } onClick={playSong}/><br/>
          <audio controls ref='audio' key={ this.props.emotionName + this.props.palette } > //key to rerender audio
            <Song emotion={ this.props.emotionName.toLowerCase() } palette={ this.props.palette } />
          </audio>
      </div>
    );
  }
  
}

export default MusicalAccompaniment;
