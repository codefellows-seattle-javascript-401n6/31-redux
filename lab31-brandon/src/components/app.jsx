import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowseRouter, Route} from 'react-router-dom'

import categoryReducer from '../reducers/category-app';
const store = createStore(categoryReducer);

import Dashboard from './Dashboard';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <BrowseRouter>
                <Router exact path= '/' component={Dashboard}/>
              </BrowseRouter>
            </Provider>
        )
    }
}

export default App;
