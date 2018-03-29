import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MusicalAccompaniment from './MusicalAccompaniment';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 


ReactDOM.render(
	<Router>
		<Switch>
	        <Route exact path="/" component={App}/>
	        <Route path="/music" component={MusicalAccompaniment}/>
	    </Switch>
    </Router>
      , document.getElementById('root'));
registerServiceWorker();
