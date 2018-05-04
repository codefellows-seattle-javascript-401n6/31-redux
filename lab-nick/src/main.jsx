'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() { // JSX
    return <Router>
      <div>
        <h1>Hello World!</h1>
      </div>
    </Router>
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
