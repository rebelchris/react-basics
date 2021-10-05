import { useState } from 'react';
import Book from './Book';

export default function Bookshelf({ books }) {
  const [currentBook, setCurrentBook] = useState('');

  return (
    <div>
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
