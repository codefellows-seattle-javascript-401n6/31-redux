import {
    CATEGORY_CREATE, CATEGORY_UPDATE
} from '../actions/category-actions'

const initialState = {
    categories: []
}

export default function categoryReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }
    
    let newState = {}
    let newCats = [];

    switch(action.type) {
        case CATEGORY_CREATE:
            let newCats = state.categories.slice();
            newCats.push(action.category)
            return Object.assign(newState, {
                categories: newCats
            });
        
        case CATEGORY_UPDATE:
            let updatedCategories = state.categories.map(cat => {
                if(cat.id === action.category.id) {
                    return action.category
                } else {
                    return cat;
                }
            });
        
        case CATEGORY_DESTROY:
    }
}