import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const RemoveBook = ({ id }) => {
  const dispatch = useDispatch();

  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <button type="button" className="book-btn" onClick={() => deleteBook(id)}>Remove</button>
  );
};

RemoveBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveBook;
