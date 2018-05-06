import {
  CREATE,
  // UPDATE,
  // REMOVE,
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
 
  switch (action.type) {
  case CREATE: {
    action.category.id = uuid();
    action.category.date = new Date();
    console.log('switchCreate category=', action.category);

    let newList = [...state.category, action.category];
    newState = Object.assign(newState, state, {category: newList});
    return newState;
  }
  // case UPDATE:
  //   return Object.assign(newState, state, { data: state.data });
  // case REMOVE:
  //   return Object.assign(newState, state, { data: state.data + action.value});
  default: return state;
  }
}
