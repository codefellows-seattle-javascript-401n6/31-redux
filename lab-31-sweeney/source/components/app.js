import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import budgetAppReducer from '/budget-app';
import Dashboard from '/dashboard';

const store = createStore(categoryAppReducer);


class App extends React.Component{
  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
            <Route exact path = '/' component = {Dashboard}/>
            </BrowserRouter>
      </Provider>
    )
  }
}

export default App;