import React from 'react';
import { useDispatch } from 'react-redux';
import icon from '../../img/bookPlaceholder.jpg';
import { storeBooks } from '../../redux/store/storeOptions';
import style from './Books.module.css';

function BooksItem({ item }) {
  const dispatch = useDispatch();

  const handleAddBook = id => {
    dispatch(storeBooks(id));
  };

  return (
    <li className={style.card}>
      <div className={style.bookCover}>
        <img src={item.img || icon} alt={item.title} className={style.img} />
      </div>
      <div className={style.content}>
        <div>
          <span>Title: </span>
          {item.title}.
        </div>{' '}
        <div>
          <span>Author: </span>
          {item.author}
        </div>
        <div>
          <span>Price: </span>${item.price}
        </div>
      </div>
      <button
        type="button"
        className={style.button}
        onClick={() => {
          handleAddBook(item);
        }}
      >
        ADD
      </button>
    </li>
  );
}

export default BooksItem;
