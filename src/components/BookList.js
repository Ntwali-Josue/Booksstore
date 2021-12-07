import { log } from 'console';
import React, { useState } from 'react';
import Book from './Book';
import InputBook from './InputBook';

const BookLists = () => {
  const [books, setBooks] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setBooks({
      ...books,
      title: e.target.value,
    });
  };

  return (
    <div className="book-lists">
      <Book title={books.title} author={books.author} />
      <Book title={books.title} author={books.author} />
      <Book title={books.title} author={books.author} />
      <InputBook
        title={books.title}
        author={books.author}
        setBooks={setBooks}
        onChange={onChange}
      />
    </div>
  );
};

export default BookLists;
