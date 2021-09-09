import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featch } from '../../redux/books/booksOptions';
import { getBooks } from '../../redux/books/BooksSelectors';
import style from './Books.module.css';
import icon from '../../img/bookPlaceholder.jpg';
import { storeBooks } from '../../redux/store/storeOptions';

class Books extends Component {
  state = {};

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.featch();
  }

  handleAddBook = id => {
    this.props.idBook(id);
  };

  render() {
    const { bookses } = this.props;
    return (
      <div>
        {bookses && (
          <ul className={style.bookItems}>
            {bookses.map(i => (
              <li key={i.id} className={style.item}>
                <img
                  src={i.img ? i.img : icon}
                  alt={i.title}
                  className={style.img}
                />
                <div className={style.text}>
                  <span> Title:</span>
                  {i.title}. <span>Author:</span>
                  {i.author}
                  <span>Price:</span> ${i.price}
                  <button
                    type="button"
                    className={style.button}
                    onClick={() => {
                      this.handleAddBook(i);
                    }}
                  >
                    ADD
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mstp = state => ({
  bookses: getBooks(state),
});

const mdtp = dispatch => ({
  featch: () => dispatch(featch()),
  idBook: id => dispatch(storeBooks(id)),
});

export default connect(mstp, mdtp)(Books);
