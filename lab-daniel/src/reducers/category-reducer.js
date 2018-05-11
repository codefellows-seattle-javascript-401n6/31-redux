import {
    CATEGORY_CREATE
} from '../actions/category-actions'

const initialState = {
    categories: []
}

export default function categoryReducer(state, actuon) {
    if (state === undefined) {
        return initialState;
    }
    
    let newState = {}
    let newCategories = [];

    switch(action.type) {
        case CATEGORY_CREATE:
            return Object.assign(newState, {
                categories: [...state.categories, action.categories]
            })
    }
}