import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import BookLists from './BookList';
import Categories from './Categories';
import store from '../redux/configureStore';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookLists />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
