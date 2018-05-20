import {
    CATEGORY_CREATE, 
    CATEGORY_UPDATE, 
    CATEGORY_DESTROY
} from '..actions/category-actions';

const initialState= {
    categories: []
}

export default function categoryReducer (state, action) {
    if(state === undefined) {
        return initialState
    }
    let newState = {};
    let newCategory = [];
    
    switch (action.type) {
        
        case CATEGORY_CREATE:
            return Object.assign(newState, {
                categories: [...state.categories, action.category]
            })

        case CATEGORY_UPDATE:
        let updatedCategories = state.categories.map(cat => {
            if (cat.id === action.category.id) {
                return action.category;
            } else {
                return cat;
            }
        });
        return Object.assign(newState, {
            categories: updatedCategories
        })

        case CATEGORY_DESTROY:
        newCategory = state.categories.filter(cat => cat.id !== action.category.id);
            return Object.assign(newState, {
                categories: newCategory
            })
        default:
            return state;
    }
 }