import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY
} from '../constants/action-types.js';

export const createCategory = category => ({ type: CATEGORY_CREATE, payload: category});
export const updateCategory = category => ({ type: CATEGORY_UPDATE, payload: category});
export const destroyCategory = category => ({ type: CATEGORY_DESTROY, payload: category});
