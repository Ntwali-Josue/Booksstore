import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
];

const InputBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('Action');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ color: '#5c5c5c', padding: '0 50px' }}>Add a new Book</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="bookTitle"
          placeholder="Book Title"
          value={title}
          onChange={handleTitleChange}
          name="title"
        />
        <select
          className="select"
          value={category}
          onChange={handleCategoryChange}
          name="category"
        >
          {categories.map((categ) => (
            <option key={uuidv4()} value={categ}>{categ}</option>
          ))}
        </select>
        <input type="submit" value="ADD BOOK" className="add-book" />
      </div>
    </form>
  );
};

export default InputBook;
