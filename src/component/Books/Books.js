import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featch } from '../../redux/books/booksOptions';
import { getBooks } from '../../redux/books/BooksSelectors';
import style from './Books.module.css';
import BooksItem from './BooksItem';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);

  useEffect(() => {
    dispatch(featch());
  }, []);

  return (
    <div>
      {books && (
        <ul className={style.bookItems}>
          {books.map(item => (
            <BooksItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Books;
