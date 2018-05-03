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
  let categoryIndex;

  console.log('action type', action.type);

  switch(action.type) {
    case CATEGORY_CREATE:
      currentCategories = state.categories.slice();
      let newCategory = Object.assign({}, {id: uuidv1(), isEditing: false}, action.value);
      currentCategories.push(newCategory);
      return Object.assign(newState, state, {categories: currentCategories});
    case CATEGORY_UPDATE:
      console.log('attempt to update values', action.values);
      console.log('attempt to update values id', action.values.id);
      currentCategories = state.categories.slice();
      let categoryToUpdate = currentCategories.find(category => {
        return category.id === action.values.id;
       });
      categoryIndex = currentCategories.indexOf(categoryToUpdate);
      console.log('category to update index', categoryIndex);
      currentCategories[categoryIndex].isEditing = !currentCategories[categoryIndex].isEditing;
      if (action.values.name) {
        console.log('THERE is action values name');
        currentCategories[categoryIndex].name = action.values.name;
      }
      if (action.values.budget) {
        console.log('THERE is action values budget');
        currentCategories[categoryIndex].budget = action.values.budget;
      }
      console.log('edited category', currentCategories[categoryIndex]);
      return Object.assign(newState, state, {categories: currentCategories});
    case CATEGORY_DESTROY:
      currentCategories = state.categories.slice();
      console.log('destroy', action.id);
      let categoryToRemove = currentCategories.find(category => {
        return category.id === action.id;
      });
      categoryIndex = currentCategories.indexOf(categoryToRemove);
      currentCategories.splice(categoryIndex, 1);
      return Object.assign(newState, state, {categories: currentCategories});
  }
}