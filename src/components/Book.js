import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({ id, title, author }) => (
  <div>
    <div className="book-card ">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <RemoveBook id={id} />
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
