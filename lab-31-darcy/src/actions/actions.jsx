export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';

export function create(category) {
  return {
    type: CREATE, 
    category: category
  };
}

// export function update(value) {
//   return {type: UPDATE, value};
// }

// export function remove(id) {
//   return {type: REMOVE, id};
// }