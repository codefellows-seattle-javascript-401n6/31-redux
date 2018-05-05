'use strict';

import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import counterAppReducer from '../reducer/budget-reducer.jsx';
const store = createStore(counterAppReducer);

import Dashboard from './Dashboard.jsx';
console.log(Dashboard);

class App extends React.Component {
  constructor(props){
  super(props);
  }

  render() {
    console.log('Rendering budget-app');
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>Budget Tracker</h1>
          </div>
          <Route exact path='/' component={Dashboard}/>
        </Router>
      </Provider>
    )
    console.log('budget-app Rendered');
  }
}

export default App