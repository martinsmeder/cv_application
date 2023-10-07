import { useState } from 'react';

const libraryArray = [
  {
    shelf: 'Shelf A',
    title: 'Book 1',
    authorName: 'Author 1',
    birthYear: '1990',
  },
  {
    shelf: 'Shelf B',
    title: 'Book 2',
    authorName: 'Author 2',
    birthYear: '2000',
  },
];

export default function App() {
  const [library, setLibrary] = useState(libraryArray);

  return (
    <div>
      {library.map((book, bookIndex) => (
        <div key={bookIndex}>
          <h2>{book.shelf}</h2>
          <ul>
            <li>
              <strong>Title:</strong> {book.title}
            </li>
            <li>
              <strong>Author:</strong> {book.authorName}
            </li>
            <li>
              <strong>Birth Year:</strong> {book.birthYear}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
