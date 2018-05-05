'use strict'
const uuid = require('uuid/v4');

const initialState = {
  appName: 'Budget',
  id :  uuid(),
  dateCreated : new Date(),
  budget: 0,
};

export default function budgetReducer(state,action){
  if(state === undefined){
    return initialState;
  }
}

let newState = {};

switch(action.type){
  case CATEGORY_CREATE : return Object.assign(newState, state, {create});
  case CATEGORY_UPDATE : return Object.assign(newState, state, {update});
  case CATEGORY_DESTROY : return Object.assign(newState, state, {destroy});
}
