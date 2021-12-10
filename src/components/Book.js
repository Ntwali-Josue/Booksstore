import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({ id, title, category }) => (
  <>
    <div className="card-style">
      <div>
        <span className="title">{title}</span>
        <br />
        <span className="category">{category}</span>
        <br />
        <span className="author">By Josh</span>
        <br />
        <button type="button" className="book-btn comments">Comments</button>
        <RemoveBook id={id} />
        <button type="button" className="book-btn">Edit</button>
      </div>
      <div className="progress-section">
        <img alt="progress" variant="top" src="https://i.stack.imgur.com/7wcxc.png" className="image" />
        <div>
          <span className="percentage">24%</span>
          <br />
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="chapter-section">
        <span className="current-chapter">Current chapter</span>
        <br />
        <span className="chapter">Chapter 17</span>
        <br />
        <button type="button" className="update-progress">Update progress</button>
      </div>
    </div>
  </>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
