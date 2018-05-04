export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTORY = 'CATEGORY_DESTORY';


export function catCreate(data) {
	return {type: CATEGORY_CREATE, data}
}

export function catUpdate(data) {
	return {type: CATEGORY_UPDATE, data}
}

export function catDestroy(data) {
	return {type: CATEGORY_DESTORY, data}
}

