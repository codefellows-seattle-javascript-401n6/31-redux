export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';

export function create() {
	return {type: CREATE}
}

export function update() {
	return {type: UPDATE}
}

export function remove() {
	return {type: REMOVE}
}