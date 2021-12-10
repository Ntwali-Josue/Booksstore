import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import RemoveBook from './RemoveBook';

const Book = ({ id, title, category }) => (
  <>
    <div className="book-card ">
      <Card>
        <Card.Body>
          <Card.Subtitle>{title}</Card.Subtitle>
          <Card.Title>{category}</Card.Title>
          <Card.Text>By Josh</Card.Text>
          <button type="button" className="book-btn comments">Comments</button>
          <RemoveBook id={id} />
          <button type="button" className="book-btn">Edit</button>
        </Card.Body>
      </Card>
    </div>
  </>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
