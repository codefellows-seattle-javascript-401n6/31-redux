import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from '../lib/store';
import Dashboard from './dashboard.jsx';

class App extends React.Component {
  render() {
    return <Provider 
      store={store}>
      <BrowserRouter>
        <Route exact path = '/' component={Dashboard} />
      </BrowserRouter>
    </Provider>;
  }
}

export default App;