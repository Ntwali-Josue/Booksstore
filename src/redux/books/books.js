import axios from 'axios';

const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const fetchApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GFFEgsISOe46DTFg0eTa/books/';

const initialsState = [];

export const getBooks = () => async (dispatch) => {
  const result = await axios.get(fetchApi);
  const books = result.data;

  const allBooks = Object.entries(books);
  const fetchedBooks = [];
  allBooks.forEach((book) => {
    const id = book[0];
    const { title } = book[1][0];
    const { category } = book[1][0];
    fetchedBooks.push({ id, title, category });
  });

  dispatch({ type: GET_BOOKS, fetchedBooks });
};

export const addBook = (book) => async (dispatch) => {
  const result = await axios.post(fetchApi, {
    item_id: book.id,
    title: book.title,
    category: book.category,
  });
  const addedBook = result.data;
  if (addedBook === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book,
    });
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  const result = await axios.delete(`${fetchApi}/${bookId}`);
  const removedBook = result.data;
  if (removedBook === 'Deleted') {
    dispatch({
      type: REMOVE_BOOK,
      bookId,
    });
  }
};

const reducer = (state = initialsState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.fetchedBooks];
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
