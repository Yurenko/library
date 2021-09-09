import { ActionsType } from './booksActions';

const books = (state = [], { type, payload }) => {
  switch (type) {
    case ActionsType.BOOKS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
export default books;
