import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import sprite from '../../img/sprite/sprite.svg';
import { getCashBooks, getTotalBooks } from '../../redux/books/BooksSelectors';

function Header() {
  const totalBooks = useSelector(getTotalBooks);
  const cashBooks = useSelector(getCashBooks);
  return (
    <div className={style.header}>
      <NavLink to="/" className={style.logo}>
        Bookstore
      </NavLink>

      <div>
        <svg className={style.iconShop}>
          <use href={`${sprite}#shopping-cart`} />
        </svg>
        <NavLink to="/store" className={style.shop}>
          <span>{totalBooks} </span>
          Cash
          <span> (${cashBooks})</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
