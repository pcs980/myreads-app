import React from 'react';

import Book from './Book';

const SearchResult = props => (
  <div className='search-books-results'>
    <ol className='books-grid'></ol>
    {props.results.map((book) => (
      <Book
        shelfChanger={props.shelfChanger}
        key={book.id}
        book={book}/>
    ))}
  </div>
);

export default SearchResult;