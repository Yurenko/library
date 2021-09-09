import { booksRequestActions, booksSuccessActions } from './booksActions';
import data from '../../db';

export const featch = () => dispatch => {
  dispatch(booksRequestActions());
  setTimeout(() => {
    dispatch(booksSuccessActions(data));
  }, 300);
};
