import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Book from './Book';

export default function Bookshelf({ books }) {
  const [currentBook, setCurrentBook] = useState('');
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      {currentBook && <h1>Currently reading: {currentBook}</h1>}
      {books.map((book) => (
        <Book
          setCurrentBook={setCurrentBook}
          title={book.title}
          key={book.id}
        />
      ))}
    </div>
  );
}
