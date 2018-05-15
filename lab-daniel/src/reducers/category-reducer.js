import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE, 
    CATEGORY_DESTROY
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
    let currentCategories;
    let categoryIndex;
    switch (action.type) {

        case CATEGORY_CREATE:
            let newCats = state.categories.slice();
            newCats.push(action.category)
            return Object.assign(newState, {
                categories: newCats
            });

        case CATEGORY_UPDATE:
            let updatedCategories = state.categories.map(cat => {
                if (cat.id === action.category.id) {
                    return action.category
                } else {
                    return cat;
                }
            });

        case CATEGORY_DESTROY:
            currentCategories = state.categories.slice();
            let removeCategories = currentCategories.find(cat => {
                return cat.id === action.id;
            });
            categoryIndex = currentCategories.indexOf(removeCategories);
            currentCategories.splice(categoryIndex, 1);
            return Object.assign(newState, state, { categories: currentCategories });

        default: return state;
    }
}