/* eslint-disable */

import { combineReducers } from 'redux';
import { ActionsType } from './storeActions';

const storeBooks = (state = [], { type, payload }) => {
  switch (type) {
    case ActionsType.STORE_SUCCESS:
    case ActionsType.STORE_ADD_SUCCESS:
      return {
        ...state,
        [payload.books.id]: !state[payload.books.id]
          ? [payload.books]
          : [...state[payload.books.id], payload.books],
      };
    case ActionsType.STORE_DELETE:
      let next = { ...state };
      next[payload.id].length === 1
        ? delete next[payload.id]
        : (next = {
            ...state,
            [payload.id]: [...state[payload.id]].splice(
              1,
              [...state[payload.id]].length - 1,
            ),
          });
      return next;
    case ActionsType.STORE_CLEAR:
      const item = { ...state };
      delete item[payload.id];
      return item;
    default:
      return state;
  }
};

const totalBooks = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionsType.STORE_SUCCESS:
    case ActionsType.STORE_ADD_SUCCESS:
      return state + 1;
    case ActionsType.STORE_DELETE:
      return state - 1;
    case ActionsType.STORE_CLEAR:
      return state - payload.leng;
    default:
      return state;
  }
};

const cashBooks = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionsType.STORE_SUCCESS:
    case ActionsType.STORE_ADD_SUCCESS:
      return Math.round((state + payload.books.price) * 100) / 100;
    case ActionsType.STORE_DELETE:
      return Math.round((state - payload.price) * 100) / 100;
    case ActionsType.STORE_CLEAR:
      return Math.round((state - payload.leng * payload.price) * 100) / 100;
    default:
      return state;
  }
};

export default combineReducers({
  storeBooks,
  totalBooks,
  cashBooks,
});
