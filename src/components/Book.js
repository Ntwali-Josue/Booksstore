import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import RemoveBook from './RemoveBook';

const cardStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '15px',
  alignItems: 'center',
  padding: '10px 20px',
};

const Book = ({ id, title, category }) => (
  <>
    <div className="book-card ">
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Subtitle>{title}</Card.Subtitle>
          <Card.Title>{category}</Card.Title>
          <Card.Text>By Josh</Card.Text>
          <button type="button" className="book-btn comments">Comments</button>
          <RemoveBook id={id} />
          <button type="button" className="book-btn">Edit</button>
        </Card.Body>
        <Card.Body>
          <Card.Img variant="top" src="https://i.stack.imgur.com/7wcxc.png" className="image" />
          <Card.Title>24%</Card.Title>
          <Card.Text>Completed</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Current chapter</Card.Subtitle>
          <Card.Title>Chapter 17</Card.Title>
          <Button variant="primary">Update progress</Button>
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
