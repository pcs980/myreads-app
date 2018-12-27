import React from 'react';

import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

const SearchPage = props => (
  <div className="search-books">
    <SearchBar />
    <SearchResult />
  </div>
);

export default SearchPage;