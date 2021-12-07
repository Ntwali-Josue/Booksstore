import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const categories = [
  { value: '1', label: 'Action' },
  { value: '2', label: 'Adventure' },
  { value: '3', label: 'Comedy' },
  { value: '4', label: 'Drama' },
];

const InputBook = (props) => {
  const { onChange } = props;
  return (
    <form>
      <h1 style={{ color: '#5c5c5c', padding: '0 50px' }}>Add a new Book</h1>
      <div className="form-group">
        <input type="text" className="form-control" id="bookTitle" placeholder="Book Title" />
        <input type="text" className="form-control" id="bookAuthor" placeholder="Book Author" />
        <Select options={categories} className="select" />
        <input type="submit" value="ADD BOOK" className="add-book" onSubmit={onChange} />
      </div>
    </form>
  );
};

InputBook.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputBook;
