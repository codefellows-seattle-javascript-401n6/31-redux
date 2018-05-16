export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export function categoryCreate() {
  return {
    type: CATEGORY_CREATE
  };
};

export function categoryUdate(category) {
  return {
    type: CATEGORY_UPDATE, 
    // category: category //is the same as line below
    category
  };
};

export function categoryDestroy(uuidv4) {
  return {
    type: CATEGORY_DESTROY,
    uuidv4
  };
};