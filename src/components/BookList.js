import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const BookLists = () => {
  const books = useSelector((state) => state.booksReducer);
  const mapBooks = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));

  return (
    <div className="book-lists">
      {mapBooks}
      <InputBook />
    </div>
  );
};

export default BookLists;
