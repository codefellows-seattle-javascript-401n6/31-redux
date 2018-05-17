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

    switch (action.type) {

        case CATEGORY_CREATE:
            let newCats = state.categories.slice();
            newCats.push(action.category)
            return Object.assign(newState, {
                categories: newCats
            });

        // case CATEGORY_UPDATE:
        //     let updatedCategories = state.categories.map(cat => {
        //         if (cat.id === action.cat.id) {
        //             return action.category
        //         } else {
        //             return cat;
        //         }
        //     });

        case CATEGORY_DESTROY:
            let currentCategories = state.categories.slice();
            let categoryToRemove = currentCategories.find(category => {
                return category.id === action.id;
            });
            let categoryIndex = currentCategories.indexOf(categoryToRemove);
            currentCategories.splice(categoryIndex, 1);
            return Object.assign(newState, state, { categories: currentCategories });

        default: return state;
    }
}