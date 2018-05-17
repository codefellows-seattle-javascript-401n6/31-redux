import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY
} from '../actions/category-actions';

// const initialReducerState = {
//   categoriesList: {}
// };

const initialReducerState = {
  categoriesList: []
}

function categoryReducer(state, action) {
  if (state === undefined) {
    return initialReducerState;
  };
  
  
  let newState = {};
  
  switch(action.type) {
    case CATEGORY_CREATE:
    return Object.assign(
      newState,
      state,
      {categoriesList: state.categoriesList.push(action.categoryObj)});
    
    case CATEGORY_UPDATE:
    return ;
    
    case CATEGORY_DESTROY:
    return ;
  };
};

export default categoryReducer;