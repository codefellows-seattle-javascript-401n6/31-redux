export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export function categoryCreate(value) {
  return {type: CATEGORY_CREATE, value};
}

export function categoryUpdate(values) {
  console.log('in actions', values);
  return {type: CATEGORY_UPDATE, values};
}

export function categoryDestroy(id) {
  console.log('in actions destroy', id);
  return {type: CATEGORY_DESTROY, id};
}