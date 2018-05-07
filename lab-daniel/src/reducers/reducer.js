import uuidv4 from 'uuid/v4'
import { CATEGORY_CREATE } from '../actions/action.js'


const initialState = {
    appHeader: 'Budget App',
    categories: [
        {
            id: `${uuidv4()}`,
            timestamp: `${new Date()}`,
            name: '',
            budget: 0
        }
    ]
};

export default function appReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }
    let newState = {};
    let newCategories;

    switch (action.type) {
        case CATEGORY_CREATE:
            let newCategory = {
                id: `${uuidv4()}`,
                timestamp: `${new Date()}`,
                name: action.data.name,
                budget: `${parseFloat(action.data.budget)}`
            }
            newCategories = state.categories.slice();
            Object.assign(newState, state, {categories: newCategories});
            return newState;
            console.log(newState)
    }
}
