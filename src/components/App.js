import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import InputBook from './InputBook';
import Book from './Book';
import Categories from './Categories';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/books" component={Book} />
        <Route exact path="/categories" component={Categories} />
      </Routes>
      <InputBook />
    </div>
  );
}

export default App;
