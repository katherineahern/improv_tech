import React from 'react';
import ReactDOM from 'react-dom';
import Actor from '../Actor';
import Admin from '../Admin';

it('renders Actor menu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Actor />, div);
});

it('renders Admin menu without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Admin />, div);
});