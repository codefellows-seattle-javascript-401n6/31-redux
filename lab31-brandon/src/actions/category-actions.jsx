export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export function create(value) {
    return { type: CATEGORY_CREATE, value };
}

export function update(values) {
    return { type: CATEGORY_UPDATE, values };
}

export function destroy(id) {
    return { type: CATEGORY_DESTROY, id };
}