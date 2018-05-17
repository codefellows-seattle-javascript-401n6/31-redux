import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import categoryReducer from '../reducers/category-reducer';
import '../../style/main.css';

const store = createStore(categoryReducer);

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

export default App;