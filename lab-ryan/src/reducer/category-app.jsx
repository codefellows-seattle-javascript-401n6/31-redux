import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DESTROY,
    categoryDestoy,
} from '../actions/category-actions.js';
import uuidv1 from 'uuid/v1';

const origionalState = {
    categories: [], 
}

export default function categoryReducer(state, action) {
    if(state === undefined) {
        return origionalState;
    }
    let newState = {};
    let currentCategories;
    let categoryIndex;

    switch(action.type) {

        case CATEGORY_CREATE:
            currentCategories = state.categories.slice();
            let newCategory = Object.assign({}, {id: uuidv1(), isEditing: false}, action.value);
            currentCategories.push(newCategory);
            return Object.assign(newState, state, {categories: currentCategories});
        
        case CATEGORY_UPDATE:
            currentCategories = state.categories.slice();
            let toUpdate = currentCategories.find(category => {
                return category.id === action.values.id;
            });
            categoryIndex = currentCategories.indexOf(toUpdate);
            currentCategories[categoryIndex].isEditing = !currentCategories[categoryIndex].isEditing;
            if(action.values.name) {
                currentCategories[categoryIndex].budget = action.values.budget;
            }
            return Object.assign(newState, state, {categories: currentCategories});
        
        case CATEGORY_DESTROY:
            currentCategories = state.categories.slice();
            let categoryDestroy = currentCategories.find(category => {
                return category.id === action.id;
            });
            categoryIndex = currentCategories.indexOf(categoryDestoy);
            currentCategories.splice(categoryIndex, 1);
            return Object.assign(newState, state, {categories: currentCategories});
    }
}