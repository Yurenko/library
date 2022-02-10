import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookStore, getCashBooks } from '../../redux/books/BooksSelectors';
import {
  storeAddSuccessActions,
  storeClearBookAction,
  storeDeleteBookActions,
} from '../../redux/store/storeActions';
import style from './BookStore.module.css';
import BookStoreItem from './BookStoreItem';

function BookStore() {
  const dispatch = useDispatch();

  const books = useSelector(getBookStore);
  const cashBooks = useSelector(getCashBooks);

  const handleClickAddBook = book => {
    dispatch(storeAddSuccessActions(book));
  };

  const handleDeleteBook = (id, price) => {
    dispatch(storeDeleteBookActions(id, price));
  };

  const handleClearBook = item => {
    const leng = item.length;
    const { id, price } = item[0];
    dispatch(storeClearBookAction(id, leng, price));
  };

  return (
    <div className={style.order}>
      <h2>YOU ORDER</h2>
      <table className={style.table}>
        <thead>
          <tr className={style.tableHead}>
            <th>#</th>
            <th>Book</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(books).map((item, index) => (
            <BookStoreItem
              key={item[0].id}
              item={item}
              index={index}
              handleClickAddBook={handleClickAddBook}
              handleDeleteBook={handleDeleteBook}
              handleClearBook={handleClearBook}
            />
          ))}
        </tbody>
      </table>

      <div className={style.total}>Total: ${cashBooks}</div>
    </div>
  );
}

export default BookStore;
