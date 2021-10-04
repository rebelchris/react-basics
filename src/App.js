import Bookshelf from './components/Bookshelf';
import Book from './components/Book';

const books = [
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
  return (
    <div className='App'>
      <Bookshelf>
        {books.map((book) => (
          <Book title={book.title} key={book.id} />
        ))}
      </Bookshelf>
    </div>
  );
}

export default App;
