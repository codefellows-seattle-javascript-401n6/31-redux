export const CATEGORY_CREATE = 'CATEGORY_CREATE';

export function create(category) {
    return { type: CATEGORY_CREATE, category}
}

export function update(category) {
    return { type: CATEGORY_UPDATE, category}
}

export function destroy(category) {
    return { type: CATEGORY_DESTROY, category}
}