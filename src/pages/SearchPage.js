import React from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from '../apis/BooksAPI';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then((res) => {
        console.log('=======> res', res);

        this.setState({
          results: res && res.error ? [] : res
        })
      });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          onSearchBooks={(query) => this.searchBooks(query)}/>
        <SearchResult
          shelfChanger={this.props.shelfChanger}
          results={this.state.results}/>
      </div>
    );
  }
}

SearchPage.propTypes = {
  shelfChanger: PropTypes.func.isRequired
}

export default SearchPage;