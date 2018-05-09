import uuidv4 from 'uuid/v4'
import { CATEGORY_CREATE } from '../actions/action.js'


const initialState = {
    appHeader: 'Budget App',
    categories: []
};

export default function appReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }
    let newState = {};
    let newCats = [];

    switch (action.type) {
        case CATEGORY_CREATE:

        return Object.assign(newState, {
            categories: [...state.categories, action.category]
        })
    }
}
