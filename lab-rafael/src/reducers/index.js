import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY
} from '../constants/action-types.js';

const initialState = {
  categories: []
}

const rootReducer = (state = initialState, action) => {
  let newState = {};
  let categories = [];

  switch(action.type) {
    case CATEGORY_CREATE:
      return { ...state, categories: state.categories.concat(action.payload) };
    case CATEGORY_DESTROY:
      categories = state.categories.filter(category => category.id !== action.payload);
      return { categories };
    case CATEGORY_UPDATE:
      categories = state.categories.map(category => {
        if(category.id === action.payload.id) {
          return { ...category, ...action.payload };
        }
        return category;
      });
      return { ...state, categories };
    default:
      return state;
  }
};

export default rootReducer;
