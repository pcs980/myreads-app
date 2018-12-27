import React from 'react';

import SearchBar from '../components/SearchBar';

const SearchPage = props => (
  <div className="search-books">
    <SearchBar />
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  </div>
);

export default SearchPage;