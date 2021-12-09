import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { getBooks } from '../redux/books/books';

const BookLists = () => {
  useEffect(() => {
    getBooks();
  }, []);

  const books = useSelector((state) => state.booksReducer);
  const mapBooks = books.map((book) => (
    <Book key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
  ));

  return (
    <div className="book-lists">
      {mapBooks}
      <InputBook />
    </div>
  );
};

export default BookLists;
