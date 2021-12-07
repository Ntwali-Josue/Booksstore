import React from 'react';
import Select from 'react-select';

const categories = [
  { value: '1', label: 'Action' },
  { value: '2', label: 'Adventure' },
  { value: '3', label: 'Comedy' },
  { value: '4', label: 'Drama' },
];

const InputBook = () => (
  <form>
    <h1 style={{ color: '#5c5c5c', padding: '0 50px' }}>Add a new Book</h1>
    <div className="form-group">
      <input type="text" className="form-control" id="bookTitle" placeholder="Book Title" />
      <Select options={categories} className="select" />
      <input type="submit" value="ADD BOOK" className="add-book" />
    </div>
  </form>
);

export default InputBook;
