import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import appReducer from '../reducers/reducer.js'
import Dashboard from './Dashboard.js';

const store = createStore(appReducer);

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path='/' component={Dashboard}/>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;