import { useState } from 'react';
import Bookshelf from './components/Bookshelf';

const booksData = [
  {
    id: 1,
    title: 'Laravel collections',
  },
  {
    id: 2,
    title: 'Ruby for beginners',
  },
  {
    id: 3,
    title: 'CSS is awesome',
  },
];

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className='App'>
      <Bookshelf books={books}></Bookshelf>
      <button onClick={() => setBooks(booksData)}>Load the books</button>
    </div>
  );
}

export default App;
