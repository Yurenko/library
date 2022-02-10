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
    <li className={style.item}>
      <div className={style.bookCover}>
        <img src={item.img || icon} alt={item.title} className={style.img} />
      </div>
      <div className={style.text}>
        <span> Title:</span>
        {item.title}. <span>Author:</span>
        {item.author}
        <span>Price:</span> ${item.price}
        <button
          type="button"
          className={style.button}
          onClick={() => {
            handleAddBook(item);
          }}
        >
          ADD
        </button>
      </div>
    </li>
  );
}

export default BooksItem;
