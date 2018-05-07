import uuid from 'uuid/v4'


import {
    CATEGORY_CREATE
} from '../actions/action.js'

const initialState = {
    app: 'Budget App',
    categories: [
        {
            id: uuid(),
            timestamp = new Date(),
            name: '',
            budget: 0
        }
    ]
};

export default function reducer(state, action){
    if(state === undefined) {
        return State;
    }
}

let newState = {};
let newCategory;

switch(action.type) {
    case CATEGORY_CREATE:
    
}
