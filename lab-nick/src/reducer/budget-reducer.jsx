'use strict';

import {
  CATEGORY_CREATE,
  CATEGORY_DESTROY,
  CATEGORY_UPDATE
} from '../actions/budget-actions.jsx';

const initialState = {
  categories: [],
  id: '',
  timestamp: new Date(),
  name: '',
  budget: 0
};

export default function categoryrReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let newCats = [];

  switch (action.type) {
    case CATEGORY_CREATE:
      return Object.assign(newState, {
        categories: [...state.categories, action.category]
      });

    case CATEGORY_UPDATE:
      let updatedCategories = state.categories.map(cat => {
        if (cat.id === actions.category.id) {
          return action.category;
        } else {
          return cat;
        }
      })
      return Object.assign(newState, {
        categories: updatedCategories
      })
    
    case CATEGORY_DESTROY:
      newCats = state.categories.filter(cat => cat.id !== action.category.id);
      return Object.assign(newState, {
        categories: newCats
      })

    default:
      return state;
  }
}