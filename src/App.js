import Bookshelf from './components/Bookshelf';
import Book from './components/Book';

function App() {
  return (
    <div className='App'>
      <Bookshelf>
        <Book title='Laravel collections' />
        <Book title='Ruby for beginners' />
        <Book title='CSS is awesome' />
      </Bookshelf>
    </div>
  );
}

export default App;
