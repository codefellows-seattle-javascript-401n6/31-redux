import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY,
} from '../actions/category-actions.js';
import uuidv1 from 'uuid/v1';

const initialState = {
  categories: [],
}

export default function categoryReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentCategories;

  switch(action.type) {
    case CATEGORY_CREATE:
      currentCategories = state.categories.slice();
      let newCategory = Object.assign({}, {id: uuidv1()}, action.value);
      currentCategories.push(newCategory);
      return Object.assign(newState, state, {categories: currentCategories});
    case CATEGORY_UPDATE:
      return Object.assign(newState, state, action.value);
    case CATEGORY_DESTROY:
      currentCategories = state.categories.slice();
      console.log('destroy', action.id);
      let categoryToRemove = currentCategories.find(category => {
        return category.id === action.id;
      });
      let categoryIndex = currentCategories.indexOf(categoryToRemove);
      currentCategories.splice(categoryIndex, 1);
      return Object.assign(newState, state, {categories: currentCategories});
  }
}