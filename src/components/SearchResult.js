import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const SearchResult = props => {
  const { results, shelfChanger } = props;

  let renderResults = null;
  if (results) {
    if (results.length > 0) {
      renderResults = results.map((book) => (
        <Book
          shelfChanger={shelfChanger}
          key={book.id}
          book={book}/>
      ));
    } else {
      renderResults = <div>No book found!</div>
    }
  } else {
    renderResults = <div>Start typing!</div>
  }

  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {renderResults}
      </ol>
    </div>
  );
}

SearchResult.propTypes = {
  results: PropTypes.array,
  shelfChanger: PropTypes.func.isRequired
}

export default SearchResult;