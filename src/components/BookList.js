import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { getBooks } from '../redux/books/books';

const BookLists = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const books = useSelector((state) => state.booksReducer);
  const mapBooks = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} category={book.category} />
  ));

  return (
    <div className="book-lists">
      {mapBooks}
      <InputBook />
    </div>
  );
};

export default BookLists;
