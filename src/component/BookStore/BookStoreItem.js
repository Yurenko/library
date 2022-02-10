import React from 'react';
import sprite from '../../img/sprite/sprite.svg';
import style from './BookStore.module.css';

function BookStoreItem({
  item,
  index,
  handleClickAddBook,
  handleDeleteBook,
  handleClearBook,
}) {
  const { id, title, price } = item[0];

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{item.length}</td>
      <td>{Math.round(item.length * price * 100) / 100}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            handleClickAddBook(item[0]);
          }}
        >
          <svg className={style.add}>
            <use href={`${sprite}#add`} />
            <circle cx="3" cy="3" r="0.05" fill="pink" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            handleDeleteBook(id, price);
          }}
        >
          <svg className={style.minus}>
            <use href={`${sprite}#minus`} />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClearBook(item);
          }}
        >
          <svg className={style.close}>
            <use href={`${sprite}#x-mark`} />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default BookStoreItem;
