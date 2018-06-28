'use strict'
const uuid = require('uuid/v4');

const initialState = {
  appName: 'Budget',
  id :  uuid(),
  dateCreated : new Date(),
  name : String,
  budget: 0,
};

export default function budgetReducer(state,action){
  if(state === undefined){
    return initialState;
  }
}

let newState = {};

switch(action.type){
  case CATEGORY_CREATE : return Object.assign(newState, state, {name : });
  case CATEGORY_UPDATE : return Object.assign(newState, state, {name : });
  case CATEGORY_DESTROY : return Object.assign(newState, state, {destroy});
}
