import Navbar from './Navbar';
import BookList from './BookLists';
import InputBook from './InputBook';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <InputBook />
    </div>
  );
}

export default App;
