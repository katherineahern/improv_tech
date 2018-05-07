import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Actor from '../Actor';
import Admin from '../Admin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Actor menu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Actor />, div);
});

it('renders Admin menu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Admin />, div);
});