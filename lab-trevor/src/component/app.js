import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import budgetAppReducer from '../reducer/budget-app';
const store = createStore(budgetAppReducer);

import Dashboard from './dashboard';

class App extends React.Component {
  render() {
    return (
			<Provider store={store}>
				<BrowserRouter>
					<Route exact path='/' component={Dashboard}/>
				</BrowserRouter>
			</Provider>
    )
  }
}

export default App