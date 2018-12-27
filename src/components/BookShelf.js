import React from 'react';

import Book from './Book';

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books && props.books.map((book) =>
          <Book
            book={book}
            shelfChanger={props.shelfChanger}
            key={book.id} />)}
      </ol>
    </div>
  </div>
);

export default BookShelf;