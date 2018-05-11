export const CATEGORY_CREATE = 'CATEGORY_CREATE';

export function create(category) {
    return { type: CATEGORY_CREATE, category}
}