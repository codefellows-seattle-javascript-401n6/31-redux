export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

// export const categoryCreate = (categoryValue) => {
//   return {type: CATEGORY_CREATE, categoryValue}
// }

export function categoryCreate(categoryObj) {
  return {
    type: CATEGORY_CREATE,
    categoryObj
  };
};

export function categoryUdate(category) {
  return {
    type: CATEGORY_UPDATE, 
    // category: category //is the same as line below
    category
  };
};

export function categoryDestroy(uuid) {
  return {
    type: CATEGORY_DESTROY,
    uuid
  };
};