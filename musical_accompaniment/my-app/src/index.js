import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MusicalAccompaniment from './MusicalAccompaniment';
import LineHat from './LineHat';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 


ReactDOM.render(
	<Router>
		<Switch>
	        <Route exact path="/" component={App}/>
	        <Route path="/music" component={MusicalAccompaniment}/>
	        <Route path="/lineHat" component={LineHat}/>
	        <Route path='*' exact={true} component={App} />
	    </Switch>
    </Router>
      , document.getElementById('root'));
registerServiceWorker();
