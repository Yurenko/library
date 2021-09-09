export const ActionsType = {
  STORE_REQUEST: 'STORE_REQUEST',
  STORE_SUCCESS: 'STORE_SUCCESS',
  STORE_ADD_SUCCESS: 'STORE_ADD_SUCCESS',
  STORE_DELETE: 'STORE_DELETE',
  STORE_CLEAR: 'STORE_CLEAR',
};

export const storeRequestActions = () => ({
  type: ActionsType.STORE_REQUEST,
});

export const storeSuccessActions = books => ({
  type: ActionsType.STORE_SUCCESS,
  payload: { books },
});

export const storeAddSuccessActions = books => ({
  type: ActionsType.STORE_ADD_SUCCESS,
  payload: { books },
});

export const storeDeleteBookActions = (id, price) => ({
  type: ActionsType.STORE_DELETE,
  payload: { id, price },
});

export const storeClearBookAction = (id, leng, price) => ({
  type: ActionsType.STORE_CLEAR,
  payload: { id, leng, price },
});
