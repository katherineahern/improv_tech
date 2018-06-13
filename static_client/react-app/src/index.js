import React from 'react';
import ReactDOM from 'react-dom';
import MusicalAccompaniment from './music/MusicalAccompaniment';
import LineHat from './line_hat/LineHat';
import GetLine from './line_hat/GetLine';
import ShowAllLines from './line_hat/ShowAllLines';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import AudiencePlaySong from './music/AudiencePlaySong';
import AdminMusic from './music/AdminMusic';
import AudienceNewChoice from './new_choice/AudienceNewChoice';
import AdminNewChoice from './new_choice/AdminNewChoice';
import SoloNewChoice from './new_choice/SoloNewChoice';
import HatAdmin from './line_hat/HatAdmin';
import Admin from './Admin';
import Actor from './Actor';
import './css/App.css';

const Solo = () => {
	return (
		<Container>
              	<NavButton title="Improvise a Song!">
              		<a href="music" class = "button" >▶️</a>
                </NavButton>
              	<NavButton title="New Choice">
                  	<a href="soloNewChoice" class = "button" >🤷</a>
                </NavButton>
        </Container>
    );
}

const App = () => {
	return (
  		<Container>
           	<NavButton title="Songmaster">
           		<a href="AudienceMusic" className= "button bluebg" >🎶</a>
          	</NavButton>

       		<NavButton title="Add a Line" >
                <a href="LineHat" className= "button bluebg" >🖋️</a>
            </NavButton>

        	<NavButton title="New Choice" >
            	<a href="audienceNewChoice" className= "button bluebg" >📣</a>
          	</NavButton>
        </Container>
    );
}

const Container = (props) => {
	return (
		<div className="App-cover">
        	<h4>Improvisational Technology presents...</h4>
          	<h2>The Internet: Live!</h2>
          	<div className="flex-container">
          		{props.children}
          	</div>
        </div>
	);
}

const NavButton = (props) => {
	return (
		<div className="col-6">
            <div className="tile">
            	<h3>{props.title}</h3>
            	<p>{props.children}</p>
            </div>
        </div>
	);
}

ReactDOM.render(
	<Router>
		<Switch>
	        <Route exact path="/" component={App}/>
	        <Route path="/music" component={MusicalAccompaniment}/>
	        <Route path="/lineHat" component={LineHat}/>
	        <Route path="/getLine" component={GetLine}/>
	        <Route path="/audienceMusic" component={AudiencePlaySong}/>
	        <Route path="/adminMusic" component={AdminMusic}/>
	        <Route path="/audienceNewChoice" component={AudienceNewChoice}/>
	        <Route path="/adminNewChoice" component={AdminNewChoice}/>
	        <Route path="/soloNewChoice" component={SoloNewChoice} />
	        <Route path="/hatAdmin" component={HatAdmin}/>
	        <Route path="/admin" component={Admin}/>
	        <Route path="/solo" component={Solo}/>
	        <Route path="/actor" component={Actor}/>
	        <Route path="/showAllLines" component={ShowAllLines}/>
	        <Route path='*' exact={true} component={App} />
	    </Switch>
    </Router>
      , document.getElementById('root'));
registerServiceWorker();
