import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookStore } from '../../redux/books/BooksSelectors';
import {
  storeAddSuccessActions,
  storeClearBookAction,
  storeDeleteBookActions,
} from '../../redux/store/storeActions';
import style from './BookStore.module.css';
import sprite from '../../img/sprite/sprite.svg';

class BookStore extends Component {
  handleClickAddBook = book => {
    this.props.addCurrentBook(book);
  };

  handleDeleteBook = (id, price) => {
    this.props.delete(id, price);
  };

  handleClearBook = item => {
    const leng = item.length;

    this.props.clear(item[0].id, leng, item[0].price);
  };

  render() {
    const { books, cashBooks } = this.props;
    const book = Object.values(books);
    return (
      <div>
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
            {book.map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>{i[0].title}</td>
                <td>{i.length}</td>
                <td>{Math.round(i.length * i[0].price * 100) / 100}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      this.handleClickAddBook(i[0]);
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
                      this.handleDeleteBook(i[0].id, i[0].price);
                    }}
                  >
                    <svg className={style.minus}>
                      <use href={`${sprite}#minus`} />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      this.handleClearBook(i);
                    }}
                  >
                    <svg className={style.close}>
                      <use href={`${sprite}#x-mark`} />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={style.total}>Total: ${cashBooks}</div>
      </div>
    );
  }
}

const mstp = state => ({
  cashBooks: state.storeBooks.cashBooks,
  books: bookStore(state),
});

const mdtp = dispatch => ({
  addCurrentBook: book => dispatch(storeAddSuccessActions(book)),
  delete: (id, price) => dispatch(storeDeleteBookActions(id, price)),
  clear: (id, leng, price) => dispatch(storeClearBookAction(id, leng, price)),
});

export default connect(mstp, mdtp)(BookStore);
