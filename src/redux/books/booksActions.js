export const ActionsType = {
  BOOKS_REQUEST: 'BOOKS_REQUEST',
  BOOKS_SUCCESS: 'BOOKS_SUCCESS',
};

export const booksRequestActions = () => ({
  type: ActionsType.BOOKS_REQUEST,
});

export const booksSuccessActions = books => ({
  type: ActionsType.BOOKS_SUCCESS,
  payload: { books },
});
