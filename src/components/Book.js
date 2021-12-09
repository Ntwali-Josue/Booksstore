import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({ id, title, category }) => (
  <div>
    <div className="book-card ">
      <h2>{title}</h2>
      <span>{category}</span>
      <h3>By Josh</h3>
      <RemoveBook id={id} />
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
