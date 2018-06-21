import { createStore } from 'redux';
import categoryReducer from '../reducers/category-app.jsx';

const store = createStore(categoryReducer);

export default store;