import {
  CATEGORY_CREATE,
  CATEGORY_DESTROY,
  CATEGORY_UPDATE,
} from '../action/budget-actions';

const initialState = {
  appName: 'This Is My Budget APP',
  categories: [
    {
      id: '293482309548',
      timestamp: 'today',
      name: 'food',
      budget: 300,
    }
  ]
};

export default function counterReducer(state, action) {
  console.log('action', action)
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  switch(action.type) {
    case CATEGORY_CREATE:
      let newCategory = {id: 'dfadaklf', timestamp: 'tomorrow', name: action.data.name, budget: action.data.budget}
      console.log('newcat', newCategory);
      let newCategories = state.categories.slice();
      newCategories.push(newCategory);
      Object.assign(newState, state, {categories: newCategories});
      
      // newState.categories.push(newCategory);
      console.log('stat and new state', state, newState)
      console.log('newState', newState)
      return newState;
    case CATEGORY_UPDATE:
      return Object.assign(newState, state, {data: state.data - action.value});
    case CATEGORY_DESTROY:
      return Object.assign(newState, state, {data: state.data - action.value});
    default: return state;
  }
}