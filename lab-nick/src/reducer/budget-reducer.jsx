'use strict';

const initialState = {
  id: '',
  timestamp: new Date(),
  name: '',
  budget: 0

  // appName: 'Counting',
  // data: 0,
  // // other state data that may not even necessarily be accessed
  // // by the component we're using.
  // dateCreated: new Date(),
  // otherData: [{}, {}, {}],
  // id: 'sdfgfsdgfasdfgfdgdf'
};

export default function counterReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }
}