import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY
} from '../actions/category-actions';
import uuidv4 from 'uuid/v4';

// const initialReducerState = {
//   categoriesList: {}
// };
const initialReducerState = {
  categoriesList: []
};

function categoryReducer(state, action) {
  if (state === undefined) {
    return initialReducerState;
  };
  
  
  let newState = {};

  // let newList;
  
console.log('action: ', action.type, state);

  switch(action.type) {
    case CATEGORY_CREATE:
    // newList = state.categoriesList.map(array => {
    //   return array;
    // });
    return Object.assign(newState, state, {categoriesList: state.categoriesList.push(action.categoryObj)});
    
    case CATEGORY_UPDATE:
      return ;
    
    case CATEGORY_DESTROY:
      return ;
  };
};

export default categoryReducer;