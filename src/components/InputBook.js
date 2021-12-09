import React, { useState } from 'react';
import Select from 'react-select';
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = [
  { value: '1', label: 'Action' },
  { value: '2', label: 'Adventure' },
  { value: '3', label: 'Comedy' },
  { value: '4', label: 'Drama' },
];

const InputBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook());
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ color: '#5c5c5c', padding: '0 50px' }}>Add a new Book</h1>
      <div className="form-group">
        <input type="text" className="form-control" id="bookTitle" placeholder="Book Title" value={title} onChange={handleTitleChange} name="title" />
        <Select options={categories} className="select" />
        <input type="submit" value="ADD BOOK" className="add-book" />
      </div>
    </form>
  );
};

export default InputBook;
