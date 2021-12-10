import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
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
      <div>
        <Card.Subtitle className="mb-2 text-muted">Current chapter</Card.Subtitle>
        <Card.Title>Chapter 17</Card.Title>
        <Button variant="primary">Update progress</Button>
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
