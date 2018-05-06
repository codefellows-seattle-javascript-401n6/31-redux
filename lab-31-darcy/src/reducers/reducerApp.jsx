import {
  CREATE,
  UPDATE,
  REMOVE,
} from '../actions/actions.jsx';

import uuid from 'uuid';

const initialState = {
  category: []
};

export default function budgetReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentCatList;
  let catIndex;
  let newList;
  let catUpdate;
  let catRemove;

  switch (action.type) {
  case CREATE:
    action.category.id = uuid();
    action.category.date = new Date();

    newList = [...state.category, action.category];
    newState = Object.assign(newState, state, { category: newList });
    return newState;

  case UPDATE:
    currentCatList = state.category.slice();
    catUpdate = currentCatList.find(category => {
      return category.id === action.category.id;
    });
    catIndex = currentCatList.indexOf(catUpdate);
    currentCatList[catIndex].isEditing = !currentCatList[catIndex].isEditing;
    if (action.category.catName) {
      currentCatList[catIndex].catName = action.category.catName;
    }
    if (action.category.budget) {
      currentCatList[catIndex].budget = action.category.budget;
    }
    return Object.assign(newState, state, { category: currentCatList });

  case REMOVE:
    currentCatList = state.category.slice();
    catRemove = currentCatList.find(category => {
      return category.id === action.id;
    });
    catIndex = currentCatList.indexOf(catRemove);
    currentCatList.splice(catIndex, 1);
    return Object.assign(newState, state, { category: currentCatList });
  
  default: return state;
  }
}