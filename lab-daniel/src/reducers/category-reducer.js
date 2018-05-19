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
    let updateCategories;
    let categoryIndex;
    let categoryToRemove;


    switch (action.type) {

        case CATEGORY_CREATE:
            let newCats = state.categories.slice();
            newCats.push(action.category)
            return Object.assign(newState, {
                categories: newCats
            });


        case CATEGORY_UPDATE:
            currentCategories = state.categories.slice();
            updateCategories = currentCategories.find(category => {
                return category.id === action.value.id;
            });
            categoryIndex = currentCategories.indexOf(updateCategories);
            currentCategories[categoryIndex].isEditing = !currentCategories[categoryIndex].isEditing;
            if (action.value.name) {
                currentCategories[categoryIndex].budget = action.value.budget;
            }
            return Object.assign(newState, state, { categories: currentCategories });


        case CATEGORY_DESTROY:
            currentCategories = state.categories.slice();
            categoryToRemove = currentCategories.find(category => {
                return category.id === action.id;
            });
            categoryIndex = currentCategories.indexOf(categoryToRemove);
            currentCategories.splice(categoryIndex, 1);
            return Object.assign(newState, state, { categories: currentCategories });

        default: return state;
    }
}
