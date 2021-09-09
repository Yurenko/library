import { storeRequestActions, storeSuccessActions } from './storeActions';

export const storeBooks = book => dispatch => {
  dispatch(storeRequestActions());
  dispatch(storeSuccessActions(book));
};
