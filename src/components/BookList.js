import React, { useState } from 'react';
import Book from './Book';
import InputBook from './InputBook';

const BookLists = () => {
  const [book, setBooks] = useState({
    title: '',
    author: '',
  });

  return (
    <div className="book-lists">
      <Book title={book.title} author={book.author} />
      <Book title={book.title} author={book.author} />
      <Book title={book.title} author={book.author} />
      <InputBook setBooks={setBooks} />
    </div>
  );
};

export default BookLists;
