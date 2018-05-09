export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';

export function create(category) {
  return {type: CREATE, category};
}

export function update(category) {
  return {type: UPDATE, category};
}

export function remove(category) {
  return {type: REMOVE, category};
}