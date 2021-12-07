import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BookLists from './BookList';
import Categories from './Categories';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<BookLists />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
