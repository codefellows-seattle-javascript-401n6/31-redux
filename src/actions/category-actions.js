'use strict'; 

import uuid from 'uuid/v1';
export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTORY = 'CATEGORY_DESTORY';
export const CATEGORY_RESET = 'CATEGORY_RESET';

export function categoryCreate(value) {
  category.id = uuid();
  category.timestamp = new Date();
  category.name = '';
  category.budget = 0;
  return {type: 'CATEGORY_CREATE', 
    payload: value
  }
}

export function categoryUpdate(value) {
  return {type: 'CATEGORY_UPDATE', 
    payload: value
  }
}

export function categoryDestroy(value) {
  return {type: 'CATEGORY_DESTORY', 
    payload: value
  }
}

export function categoryReset(){ 
  return {type: 'CATEGORY_RESET'}
};



