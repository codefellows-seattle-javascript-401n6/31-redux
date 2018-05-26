import {createStore} from 'redux';
import categoryReducer from '../reducers/category-reducer';



const store = createStore(categoryReducer);//the app expects the reducer



export default store;