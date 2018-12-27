import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const SearchResult = props => (
  <div className='search-books-results'>
    <ol className='books-grid'>
      {props.results && props.results.map((book) => (
        <Book
          shelfChanger={props.shelfChanger}
          key={book.id}
          book={book}/>
      ))}
    </ol>
  </div>
);

SearchResult.propTypes = {
  results: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired
}

export default SearchResult;