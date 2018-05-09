import {
  CREATE,
  UPDATE,
  REMOVE,
} from '../actions/actions.jsx';

const initialState = {
  categories: []
};

export default function budgetReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let newCats = [];
  let updatedCategories;

  switch (action.type) {
  
  case CREATE:
    return Object.assign(newState, {
      categories: [...state.categories, action.category] 
    });

  case UPDATE:
    updatedCategories = state.categories.map(cat => {
      if (cat.id === action.category.id) {
        return action.category;
      } else {
        return cat;
      }
    });
    return Object.assign(newState, {
      categories: updatedCategories
    });

  case REMOVE:
    newCats = state.categories.filter(cat => cat.id !== action.category.id);
    return Object.assign(newState, { 
      categories: newCats 
    });
  
  default: return state;
  }
}