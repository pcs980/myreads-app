import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../apis/BooksAPI';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
  }

  inputHandler = (event) => {
    this.setState({
      query: event.target.value
    }, () => this.searchBooks());
  }

  searchBooks = () => {
    console.log('search?', this.doSearch());

    if (this.doSearch()) {
      BooksAPI.search(this.state.query)
        .then((books) => console.log('books', books));
    }
  }

  doSearch = () => (
    this.state.query.length > 2
  )

  render() {
    return (
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>Close</Link>
        <div className='search-books-input-wrapper'>
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type='text'
            placeholder='Search by title or author'
            value={this.state.query}
            onChange={this.inputHandler} />
        </div>
      </div>
    );
  }
}

export default SearchBar;