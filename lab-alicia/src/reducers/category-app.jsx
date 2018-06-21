import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY,
} from '../action/category-actions.jsx';
import uuidv4 from 'uuid/v4';

const initialState = {
  categories: [],
};

const categoryReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentCategories;
  let categoryIndex;
  let newCategory;
  let categoryToUpdate;
  let categoryToRemove;

  switch (action.type) {
  case CATEGORY_CREATE:
    currentCategories = state.categories.slice(); //making an arr of current categories
    newCategory = Object.assign({},
      { id: uuidv4(), isEditing: false }, action.value);
    currentCategories.push(newCategory);
    return Object.assign(newState, state, { categories: currentCategories });

  case CATEGORY_UPDATE:
    currentCategories = state.categories.slice();
    categoryToUpdate = currentCategories.find(category => {
      return category.id === action.values.id;
    });
    categoryIndex = currentCategories.indexOf(categoryToUpdate);
    currentCategories[categoryIndex].isEditing = !currentCategories[categoryIndex].isEditing;
    if (action.values.name) {
      currentCategories[categoryIndex].name = action.values.name;
    }
    if (action.values.budget) {
      currentCategories[categoryIndex].budget = action.values.budget;
    }
    return Object.assign(newState, state, {categories: currentCategories});

  case CATEGORY_DESTROY:
    currentCategories = state.categories.slice();
    categoryToRemove = currentCategories.find(category => {
      return category.id === action.id;
    });
    categoryIndex = currentCategories.indexOf(categoryToRemove);
    currentCategories.splice(categoryIndex, 1);
    return Object.assign(newState, state, { categories: currentCategories });
  }
};

export default categoryReducer;