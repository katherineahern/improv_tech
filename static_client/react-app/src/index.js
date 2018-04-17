import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MusicalAccompaniment from './MusicalAccompaniment';
import LineHat from './LineHat';
import GetLine from './GetLine';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import AudiencePlaySong from './AudiencePlaySong';
import AdminMusic from './AdminMusic';
import SoloNewChoice from './SoloNewChoice';
import AudienceNewChoice from './AudienceNewChoice';
import AdminNewChoice from './AdminNewChoice';
import HatAdmin from './HatAdmin';


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
	        <Route path='*' exact={true} component={App} />

	    </Switch>
    </Router>
      , document.getElementById('root'));
registerServiceWorker();
