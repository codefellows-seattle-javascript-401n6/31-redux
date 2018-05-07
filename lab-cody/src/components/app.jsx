import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import categoryReducer from '../reducers/category-reducer.jsx';
const store = createStore(categoryReducer);

import Dashboard from './dashboard.jsx';

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