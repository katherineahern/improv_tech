import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import MusicalAccompaniment from './music/MusicalAccompaniment';
import LineHat from './line_hat/LineHat';
import GetLine from './line_hat/GetLine';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import AudiencePlaySong from './music/AudiencePlaySong';
import AdminMusic from './music/AdminMusic';
import SoloNewChoice from './new_choice/SoloNewChoice';
import AudienceNewChoice from './new_choice/AudienceNewChoice';
import AdminNewChoice from './new_choice/AdminNewChoice';
import HatAdmin from './line_hat/HatAdmin';
import Admin from './Admin';
import Solo from './Solo';
import Actor from './Actor';

ReactDOM.render(
	<Router>
		<Switch>
	        <Route exact path="/" component={App}/>
	        <Route path="/music" component={MusicalAccompaniment}/>
	        <Route path="/lineHat" component={LineHat}/>
	        <Route path="/getLine" component={GetLine}/>
	        <Route path="/audienceMusic" component={AudiencePlaySong}/>
	        <Route path="/adminMusic" component={AdminMusic}/>
	        <Route path="/soloNewChoice" component={SoloNewChoice}/>
	        <Route path="/audienceNewChoice" component={AudienceNewChoice}/>
	        <Route path="/adminNewChoice" component={AdminNewChoice}/>
	        <Route path="/hatAdmin" component={HatAdmin}/>
	        <Route path="/admin" component={Admin}/>
	        <Route path="/solo" component={Solo}/>
	        <Route path="/actor" component={Actor}/>
	        <Route path='*' exact={true} component={App} />

	    </Switch>
    </Router>
      , document.getElementById('root'));
registerServiceWorker();
