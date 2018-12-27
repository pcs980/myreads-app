import React from 'react';

import Book from './Book';

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books && props.books.map((book) =>
          <Book
            shelf={book.shelf}
            shelfChanger={props.shelfChanger}
            key={book.id}
            title={book.title}
            authors={book.authors}
            cover={book.imageLinks.thumbnail}
            ratingCount={book.ratingsCount}
            rating={book.averageRating} />)}
      </ol>
    </div>
  </div>
);

export default BookShelf;