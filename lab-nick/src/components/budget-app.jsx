'use strict';

import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import categoryAppReducer from '../reducer/budget-reducer.jsx';
const store = createStore(categoryAppReducer);
// const store = createStore(categoryAppReducer, windows.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import Dashboard from './Dashboard.jsx';
// console.log(Dashboard);

class App extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      title: 'Budget Tracker'
    }
  }

  render() {
    console.log('Rendering budget-app');
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>{this.state.title}</h1>
            <Route exact path='/' component={Dashboard}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App