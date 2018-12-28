import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const SearchResult = props => {
  const { results, books, shelfChanger } = props;

  let renderResults = null;
  if (results) {
    if (results.length > 0) {
      renderResults = results.map((result) => {
        const knownBook = books.filter((book) => result.id === book.id);
        result.shelf = knownBook.length > 0 ? knownBook[0].shelf : 'none';

        return (<Book
          shelfChanger={shelfChanger}
          key={result.id}
          book={result}/>
      )});
    } else {
      renderResults = <div>Sorry, bo book found!</div>
    }
  } else {
    renderResults = <div>Please, start typing!</div>
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
  books: PropTypes.array.isRequired,
  results: PropTypes.array,
  shelfChanger: PropTypes.func.isRequired
}

export default SearchResult;